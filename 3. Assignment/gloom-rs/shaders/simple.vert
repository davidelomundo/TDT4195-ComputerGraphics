#version 430 core

layout (location = 0) in vec3 position;
layout (location = 1) in vec4 vertex_color;
layout (location = 2) in vec3 vertex_normal;

out vec4 color;
out vec3 normal;

uniform mat4 transformation;
uniform mat4 model;

void main()
{
    gl_Position = transformation * vec4(position, 1.0);
    color = vertex_color;
    normal = normalize(mat3(model) * vertex_normal);
}