# TDT4195 Computer Graphics

Rust/OpenGL implementations of assignments 1–3 for the TDT4195 course.

Each `gloom-rs` directory is an independent Cargo project:

```text
1. Assignment/gloom-rs   # triangles and basic shaders
2. Assignment/gloom-rs   # colors, blending, and transformations
3. Assignment/gloom-rs   # 3D models, lighting, and scene graph
```

## Running

Rust/Cargo and a system supporting OpenGL 4.3 are required.

```sh
cd "3. Assignment/gloom-rs"
cargo run
```

To run the earlier assignments, enter the corresponding `gloom-rs` directory.

The main controls in assignment 3 are `WASD`, `Space`, `Shift`, the arrow keys, `E` for the door, and `Esc`/`Q` to exit.

Markdown reports and their images are located in the `report` directory of each assignment.

## Reports

Reports are written in Markdown and can be generated with Pandoc from the corresponding `report` directory:

```sh
cd "3. Assignment/gloom-rs/report"
make assignment3.pdf
```

Pandoc and a LaTeX engine are required. Generated PDF files are ignored by Git.

## macOS / UTM

The project was developed on macOS using an Ubuntu virtual machine through [UTM](https://mac.getutm.app). An [Ubuntu Desktop ISO](https://ubuntu.com/download/desktop) is required.

If the application does not start correctly under Wayland, run:

```sh
CMAKE_POLICY_VERSION_MINIMUM=3.5 WINIT_UNIX_BACKEND=x11 cargo run
```
