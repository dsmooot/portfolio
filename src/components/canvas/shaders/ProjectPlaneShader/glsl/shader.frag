varying vec2 vUv;
uniform float uTime;
uniform float uProgress;
uniform float uTriptychBlend;
uniform float uFbiBlend;
uniform float uSanctaviaBlend;
uniform float uWindRiverBlend;
uniform float uMetaBlend;
uniform float uMastercardBlend;
uniform float uEpbBlend;
uniform float uLMBlend;
uniform float uPanasonicBlend;
uniform float uRobinKnowsBlend;
uniform float uSpareTeethBlend;
uniform float uVolkswagenBlend;
uniform float uJRadioBlend;
uniform float uNorthfaceBlend;

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

// Default project colors
vec3 defaultColor1 = vec3(0.839, 0.839, 0.8);
vec3 defaultColor2 = vec3(0.31, 0.31, 0.286);
vec3 defaultColor3 = vec3(0.941, 0.941, 0.898);
vec3 defaultColor4 = vec3(0.961, 0.961, 0.922);
vec3 defaultColor5 = vec3(0.96, 0.96, 0.95);

// Triptych colors
vec3 triptychColor1 = vec3(0.63, 0.41, 0.63);
vec3 triptychColor2 = vec3(0.49, 0.05, 0.49);
vec3 triptychColor3 = vec3(0.93, 0.44, 0.93);
vec3 triptychColor4 = vec3(0.29, 0.18, 0.79);
vec3 triptychColor5 = vec3(0.57, 0.18, 0.57);

// FBI colors
vec3 fbiColor1 = vec3(0.1, 0.73, 0.73);
vec3 fbiColor2 = vec3(0.13, 0.35, 0.35);
vec3 fbiColor3 = vec3(0.13, 0.31, 0.47);
vec3 fbiColor4 = vec3(0.0, 0.45, 0.57);
vec3 fbiColor5 = vec3(0.01, 0.46, 0.55); 

// Sanctavia colors
vec3 sanctaviaColor1 = vec3(0.94, 0.43, 0.0);
vec3 sanctaviaColor2 = vec3(0.47, 0.01, 0.01);
vec3 sanctaviaColor3 = vec3(0.33, 0.44, 0.31);
vec3 sanctaviaColor4 = vec3(0.8, 0.5, 0.3);
vec3 sanctaviaColor5 = vec3(0.96, 0.76, 0.51);

// WindRiver colors
vec3 windRiverColor1 = vec3(0.3, 0.7, 0.2);
vec3 windRiverColor2 = vec3(0.93, 0.41, 0.85);
vec3 windRiverColor3 = vec3(0.5, 0.6, 0.4);
vec3 windRiverColor4 = vec3(0.41, 0.67, 0.38);
vec3 windRiverColor5 = vec3(0.7, 0.8, 0.6);

// Meta colors
vec3 metaColor1 = vec3(0.4, 0.6, 0.9);
vec3 metaColor2 = vec3(0.55, 0.76, 0.95);
vec3 metaColor3 = vec3(0.83, 0.35, 0.78);
vec3 metaColor4 = vec3(1.0);
vec3 metaColor5 = vec3(0.18, 0.6, 0.98);

// Mastercard colors
vec3 mastercardColor1 = vec3(0.9, 0.1, 0.1);
vec3 mastercardColor2 = vec3(0.9, 0.3, 0.1);
vec3 mastercardColor3 = vec3(0.93, 0.36, 0.36);
vec3 mastercardColor4 = vec3(0.97, 0.91, 0.55);
vec3 mastercardColor5 = vec3(0.98, 0.69, 0.3);

// EPB colors
vec3 epbColor1 = vec3(1.0, 1.0, 0.0);
vec3 epbColor2 = vec3(0.42, 0.5, 0.98);
vec3 epbColor3 = vec3(0.55, 0.63, 0.89);
vec3 epbColor4 = vec3(0.86, 0.89, 0.47);
vec3 epbColor5 = vec3(0.004, 0.443, 0.804);

// LumberMarketplace colors
vec3 lumberMarketplaceColor1 = vec3(0.4, 0.3, 0.2);
vec3 lumberMarketplaceColor2 = vec3(0.5, 0.4, 0.3);
vec3 lumberMarketplaceColor3 = vec3(0.6, 0.5, 0.4);
vec3 lumberMarketplaceColor4 = vec3(0.7, 0.6, 0.5);
vec3 lumberMarketplaceColor5 = vec3(0.8, 0.7, 0.6);

// Panasonic colors
vec3 panasonicColor1 = vec3(0.2, 0.4, 0.6);
vec3 panasonicColor2 = vec3(0.3, 0.5, 0.7);
vec3 panasonicColor3 = vec3(0.4, 0.6, 0.8);
vec3 panasonicColor4 = vec3(0.5, 0.7, 0.9);
vec3 panasonicColor5 = vec3(0.6, 0.8, 1.0);

// RobinKnows colors
vec3 robinKnowsColor1 = vec3(0.8, 0.2, 0.4);
vec3 robinKnowsColor2 = vec3(1.0, 0.75, 0.6);
vec3 robinKnowsColor3 = vec3(0.96, 0.35, 0.65);
vec3 robinKnowsColor4 = vec3(1.0, 0.55, 0.4);
vec3 robinKnowsColor5 = vec3(1.0, 0.75, 0.6); 

// SpareTeeth colors
vec3 spareTeethColor1 = vec3(0.7, 0.6, 0.5);
vec3 spareTeethColor2 = vec3(0.8, 0.7, 0.6);
vec3 spareTeethColor3 = vec3(0.7, 0.78, 0.9);
vec3 spareTeethColor4 = vec3(0.79, 0.99, 0.59);
vec3 spareTeethColor5 = vec3(0.99, 0.99, 0.49);

// Volkswagen colors
vec3 volkswagenColor1 = vec3(0.2, 0.2, 0.7);
vec3 volkswagenColor2 = vec3(0.3, 0.3, 0.8);
vec3 volkswagenColor3 = vec3(0.4, 0.4, 0.9);
vec3 volkswagenColor4 = vec3(0.5, 0.5, 1.0);
vec3 volkswagenColor5 = vec3(0.6, 0.6, 1.0);

// JRadio colors
vec3 jradioColor1 = vec3(0.75, 0.6, 1.0);
vec3 jradioColor2 = vec3(0.98, 0.29, 0.79);
vec3 jradioColor3 = vec3(0.82, 0.5, 1.0);
vec3 jradioColor4 = vec3(0.71, 0.4, 1.0);
vec3 jradioColor5 = vec3(0.45, 0.3, 1.0); 

// Northface colors
vec3 northfaceColor1 = vec3(0.1, 0.1, 0.1);
vec3 northfaceColor2 = vec3(1.0, 0.64, 0.0);
vec3 northfaceColor3 = vec3(0.3, 0.3, 0.3);
vec3 northfaceColor4 = vec3(0.4, 0.4, 0.4);
vec3 northfaceColor5 = vec3(0.5);

void main() {
  vec2 st = vUv * 2.0 - 1.0;

  // Distort the UV coordinates using fbm and time
  float r = sqrt(dot(st, st));
  float a = cos(st.y * st.x);

  float f = fbm(5.0 * st);
  a += fbm(vec2(1.9 - st.x, 0.1 * uTime + st.y));
  a += fbm(0.4 * st);
  r += fbm(2.9 * st);

  vec3 col = vec3(0);

  float totalBlend = uTriptychBlend + uFbiBlend + uSanctaviaBlend + uWindRiverBlend + uMetaBlend + uMastercardBlend + uEpbBlend + uLMBlend + uPanasonicBlend + uRobinKnowsBlend + uSpareTeethBlend + uVolkswagenBlend + uJRadioBlend + uNorthfaceBlend;

  float defaultWeight = 1.0 - totalBlend;

  // // Blend all colors based on weights
  // vec3 blendedColor1 = (defaultWeight * defaultColor1 + uTriptychBlend * triptychColor1 + uFbiBlend * fbiColor1 + uSanctaviaBlend * sanctaviaColor1 + uWindRiverBlend * windRiverColor1 + uMetaBlend * metaColor1 + uMastercardBlend * mastercardColor1 + uEpbBlend * epbColor1 + uLMBlend * lumberMarketplaceColor1 + uPanasonicBlend * panasonicColor1 + uRobinKnowsBlend * robinKnowsColor1 + uSpareTeethBlend * spareTeethColor1 + uVolkswagenBlend * volkswagenColor1 + uJRadioBlend * jradioColor1 + uNorthfaceBlend * northfaceColor1) * normalizedWeight;

  vec3 blendedColor2 = defaultWeight * defaultColor2 + uTriptychBlend * triptychColor2 + uFbiBlend * fbiColor2 + uSanctaviaBlend * sanctaviaColor2 + uWindRiverBlend * windRiverColor2 + uMetaBlend * metaColor2 + uMastercardBlend * mastercardColor2 + uEpbBlend * epbColor2 + uLMBlend * lumberMarketplaceColor2 + uPanasonicBlend * panasonicColor2 + uRobinKnowsBlend * robinKnowsColor2 + uSpareTeethBlend * spareTeethColor2 + uVolkswagenBlend * volkswagenColor2 + uJRadioBlend * jradioColor2 + uNorthfaceBlend * northfaceColor2;

  vec3 blendedColor3 = defaultWeight * defaultColor3 + uTriptychBlend * triptychColor3 + uFbiBlend * fbiColor3 + uSanctaviaBlend * sanctaviaColor3 + uWindRiverBlend * windRiverColor3 + uMetaBlend * metaColor3 + uMastercardBlend * mastercardColor3 + uEpbBlend * epbColor3 + uLMBlend * lumberMarketplaceColor3 + uPanasonicBlend * panasonicColor3 + uRobinKnowsBlend * robinKnowsColor3 + uSpareTeethBlend * spareTeethColor3 + uVolkswagenBlend * volkswagenColor3 + uJRadioBlend * jradioColor3 + uNorthfaceBlend * northfaceColor3;

  vec3 blendedColor4 = defaultWeight * defaultColor4 + uTriptychBlend * triptychColor4 + uFbiBlend * fbiColor4 + uSanctaviaBlend * sanctaviaColor4 + uWindRiverBlend * windRiverColor4 + uMetaBlend * metaColor4 + uMastercardBlend * mastercardColor4 + uEpbBlend * epbColor4 + uLMBlend * lumberMarketplaceColor4 + uPanasonicBlend * panasonicColor4 + uRobinKnowsBlend * robinKnowsColor4 + uSpareTeethBlend * spareTeethColor4 + uVolkswagenBlend * volkswagenColor4 + uJRadioBlend * jradioColor4 + uNorthfaceBlend * northfaceColor4;

  vec3 blendedColor5 = defaultWeight * defaultColor5 + uTriptychBlend * triptychColor5 + uFbiBlend * fbiColor5 + uSanctaviaBlend * sanctaviaColor5 + uWindRiverBlend * windRiverColor5 + uMetaBlend * metaColor5 + uMastercardBlend * mastercardColor5 + uEpbBlend * epbColor5 + uLMBlend * lumberMarketplaceColor5 + uPanasonicBlend * panasonicColor5 + uRobinKnowsBlend * robinKnowsColor5 + uSpareTeethBlend * spareTeethColor5 + uVolkswagenBlend * volkswagenColor5 + uJRadioBlend * jradioColor5 + uNorthfaceBlend * northfaceColor5;

  // Apply color blending based on procedural conditions
  float ff = 1.0 - smoothstep(-0.4, 1.1, noise(vec2(0.5 * a, 3.3 * a)));
  col = mix(col, blendedColor2, ff);

  ff = 1.0 - smoothstep(0.0, 2.8, r);
  col = mix(col, blendedColor3, ff);

  ff -= 1.0 - smoothstep(0.3, 0.5, fbm(vec2(1.0, 40.0 * a)));
  col = mix(col, blendedColor4, ff);

  ff -= 1.0 - smoothstep(2.0, 2.9, a * 1.5);
  col = mix(col, blendedColor5, ff);

  // Fade out edges of the shader
  // float fadeFactorBottom = smoothstep(0.5, 0.0, vUv.y);
  // col = mix(col, blendedColor1, fadeFactorBottom);

  // float fadeFactorTop = smoothstep(0.75, 1.0, vUv.y);
  // col = mix(col, blendedColor1, fadeFactorTop);

  // float fadeFactorLeft = smoothstep(0.6, 0.01, vUv.x);
  // col = mix(col, blendedColor1, fadeFactorLeft);

  // float fadeFactorRight = smoothstep(0.1, 0.01, 1.0 - vUv.x);
  // col = mix(col, blendedColor1, fadeFactorRight);

  // Apply gamma correction (linear to sRGB conversion)
  vec3 outputColor = mix(col.rgb, blendedColor5, uProgress * 0.8);
  vec3 gammaCorrectedColor = pow(outputColor, vec3(1.0 / 2.2));

  // Set the final output color
  gl_FragColor = vec4(mix(outputColor, gammaCorrectedColor, max(0.5, uProgress)), 1.0);
}