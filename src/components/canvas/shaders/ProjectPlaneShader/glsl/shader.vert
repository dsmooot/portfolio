varying vec2 vUv;
uniform float uProgress;
uniform float uAspect;
uniform float uTime;
uniform bool uIsMobile;
uniform bool uIsTablet;

const float PI = 3.1415926535897932384626433832795;

// Simple noise function for organic deformation
float hash(float n) {
  return fract(sin(n) * 758.5453123);
}

float noise(vec3 x) {
  vec3 p = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n = p.x + p.y * 57.0 + 113.0 * p.z;
  return mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y), mix(mix(hash(n + 113.0), hash(n + 114.0), f.x), mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
}

// Fractal Brownian Motion for more complex noise
float fbm(vec3 p) {
  float f = 0.0;
  f += 0.5 * noise(p);
  p *= 2.02;
  f += 0.25 * noise(p);
  p *= 2.03;
  f += 0.125 * noise(p);
  p *= 2.01;
  f += 0.0625 * noise(p);
  return f;
}

void main() {
  vUv = uv;
  vec3 pos = position;

  // Sphere deformation (basic spherical coordinates)
  vec2 uvSphere = uv * 2.0 - 1.0;
  float radius = 1.0;
  float theta = uvSphere.x * PI;
  float phi = uvSphere.y * PI / 2.0;

  vec3 spherePosition;
  spherePosition.x = radius * cos(phi) * sin(theta);
  spherePosition.y = radius * sin(phi);
  spherePosition.z = radius * cos(phi) * cos(theta);

  // Apply organic deformation using noise and animation
  float noiseStrength = 8.0; // Control how much deformation you want
  float deformation = fbm(spherePosition * 0.25 + uTime * 0.05); // 0.25 reduces frequency
  spherePosition += normalize(spherePosition) * deformation * noiseStrength;

  vec4 spherePos = projectionMatrix * modelViewMatrix * vec4(spherePosition, 1.0);

  // Plane position in NDC coordinates, adjusted for aspect ratio
  vec2 ndcPos = (uv * 2.0 - 1.0) * vec2(uAspect, 1.0);
  if(uIsMobile || uIsTablet) {
    ndcPos = (uv * 2.0 - 1.0) * vec2(uAspect * 5., 1.) * 5.;
  }

  vec4 planePos = vec4(ndcPos, 0.0, 1.0);

  // Apply wave-like distortion when nearing the plane
  float angle = smoothstep(0.0, 1.0, uProgress) * PI / 2.0;
  float wave = cos(angle);
  float c = sin(length(uv - 0.5) * 4. + uProgress) * 30.;
  ndcPos.x *= mix(1.0, uAspect + wave * c, smoothstep(0.0, 1.0, uProgress));
  ndcPos.y *= mix(1.0, uAspect + wave * c, smoothstep(0.0, 1.0, uProgress));
  planePos = vec4(ndcPos, 0.8, 1.0);

  // Smoother morphing between sphere and plane positions
  vec4 finalPos = mix(spherePos, planePos, smoothstep(0.0, 1.0, uProgress));

  gl_Position = finalPos;
}