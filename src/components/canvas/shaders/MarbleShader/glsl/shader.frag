varying vec2 vUv;
uniform float uTime;
uniform vec2 uMouse;

// Hash function for noise generation
float hash(float n) {
  return fract(sin(n) * 75728.5453123);
}

// 2D noise function
float noise(vec2 x) {
  vec2 p = floor(x);
  vec2 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n = p.x + p.y * 57.0;
  return mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
}

// Fractal Brownian Motion (fbm)
mat2 m = mat2(0.6, 0.6, -0.6, 0.8);
float fbm(vec2 p) {
  float f = 0.0;
  f += 0.5000 * noise(p);
  p *= m * 2.02;
  f += 0.2500 * noise(p);
  p *= m * 2.03;
  f += 0.1250 * noise(p);
  p *= m * 2.01;
  f += 0.0625 * noise(p);
  p *= m * 2.04;
  f /= 0.9375;
  return f;
}

void main() {
  //colors
  vec3 FIRST_COLOR = vec3(0.839, 0.839, 0.8);
  vec3 SECOND_COLOR = vec3(0.31, 0.31, 0.286);
  vec3 THIRD_COLOR = vec3(0.941, 0.941, 0.898);
  vec3 OFF_DARK = vec3(0.16, 0.16, 0.15);
  vec3 OFF_WHITE = vec3(0.988, 0.988, 0.957);
  vec2 st = vUv * 2.0 - 1.0;
  st.x *= 3.0; 

  // Distort the UV coordinates using fbm and time
  float r = sqrt(dot(st, st));
  float a = cos(st.y * st.x);

  float f = fbm(5.0 * st);
  a += fbm(vec2(1.9 - st.x, 0.1 * uTime + st.y));
  a += fbm(0.4 * st);
  r += fbm(2.9 * st);

  vec3 col = vec3(0, 0, 0);

  float ff = 1.0 - smoothstep(-0.4, 1.1, noise(vec2(0.5 * a, 3.3 * a)));
  col = mix(col, FIRST_COLOR, ff);

  ff = 1.0 - smoothstep(0.0, 2.8, r);
  col = mix(col, SECOND_COLOR, ff);

  ff -= 1.0 - smoothstep(0.3, 0.5, fbm(vec2(1.0, 40.0 * a)));
  col = mix(col, THIRD_COLOR, ff);

  ff = 1.0 - smoothstep(2.0, 2.9, a * 1.5);
  col = mix(col, OFF_WHITE, ff);

  //fade out edges of shader
  float fadeFactorBottom = smoothstep(0.5, 0.0, vUv.y);
  col = mix(col, OFF_WHITE, fadeFactorBottom);

  float fadeFactorTop = smoothstep(0.75, 1.0, vUv.y);
  col = mix(col, OFF_WHITE, fadeFactorTop);

  float fadeFactorLeft = smoothstep(0.6, 0.01, vUv.x);
  col = mix(col, OFF_WHITE, fadeFactorLeft);

  float fadeFactorRight = smoothstep(0.1, 0.01, 1.0 - vUv.x);
  col = mix(col, OFF_WHITE, fadeFactorRight);

  gl_FragColor = vec4(col, 1.0);
}