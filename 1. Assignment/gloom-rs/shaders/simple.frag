#version 430 core

out vec4 color;

void main()
{
    ivec2 cell = ivec2(floor(gl_FragCoord.xy / 32.0));
    float checker = float((cell.x + cell.y) % 2);
    vec3 first_color = vec3(0.1f, 0.6f, 0.9f);
    vec3 second_color = vec3(0.9f, 0.3f, 0.1f);
    color = vec4(mix(first_color, second_color, checker), 1.0f);
}