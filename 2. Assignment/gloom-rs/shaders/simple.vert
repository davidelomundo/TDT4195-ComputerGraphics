#version 430 core

layout (location = 0) in vec3 position;
layout (location = 1) in vec4 vertex_color;

out vec4 color;

uniform mat4 transformation;

void main()
{
    gl_Position = transformation * vec4(position, 1.0);
    color = vertex_color;
}