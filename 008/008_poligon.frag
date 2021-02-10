#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
const float PI = 3.14159265;

float polygonShape(vec2 position, float radius, float sides){
	position = position * 2.0 - 1.0;
	float angle = atan(position.x,position.y);
	float slice = PI * 2.0 / sides;
	//step(0.2,cos(floor(0.5+angle/slice)*slice-angle)*length(position))
	return step(0.2,cos(floor(0.5+angle/slice)*slice-angle)*length(position));
}

void main(){
	vec2 position = gl_FragCoord.xy/ u_resolution;
	vec3 color = vec3(0.0);
	float poligon = polygonShape(position,0.2,-6.3);
	color = vec3(poligon);
	gl_FragColor = vec4(color,1.0);
}