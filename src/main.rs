use parse_xyz_py::parse_xyz_file;

fn main() {
    let arr = parse_xyz_file("test.xyz");
    dbg!(arr);
}
