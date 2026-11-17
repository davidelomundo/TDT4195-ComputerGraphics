#version 430 core

in vec4 color;
in vec3 normal;
out vec4 fragment_color;

void main()
{
    vec3 lightDirection = normalize(vec3(0.8, -0.5, 0.6));
    float diffuse = max(0.0, dot(normalize(normal), -lightDirection));
    fragment_color = vec4(color.rgb * diffuse, color.a);
}