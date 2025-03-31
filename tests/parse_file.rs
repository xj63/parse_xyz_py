use parse_xyz_py::parse_xyz_file;

#[test]
fn test_parse_xyz_file() {
    let arr = parse_xyz_file("tests/assets/test.xyz");
    dbg!(arr);
}
