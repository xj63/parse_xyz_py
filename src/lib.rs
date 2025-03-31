//! # parse-xyz-py
//!
//! A simple Rust library for parsing XYZ coordinate data from strings and files.
//!
//! This crate provides functions to parse XYZ coordinate data, where each line
//! represents a point in 3D space with x, y, and z coordinates separated by
//! whitespace.  It uses the `pest` parser generator for efficient and robust parsing.
//!
//! ## Features
//!
//! *   Parses XYZ coordinate data from strings.
//! *   Parses XYZ coordinate data from files.
//! *   Provides detailed documentation and comprehensive unit tests.
//!
//! ## Usage
//!
//! Add the following to your `Cargo.toml`:
//!
//! ```sh
//! $ cargo add parse-xyz-py
//! ```
//!
//! Then, you can use the library in your Rust code:
//!
//! ```
//! use parse_xyz_py::parse_xyz;
//!
//! let data = "1.0 2.0 3.0\n4.0 5.0 6.0\n";
//! let points = parse_xyz(data);
//! assert_eq!(points, vec![[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]]);
//! ```
//!
//! ```no_run
//! use parse_xyz_py::parse_xyz_file;
//!
//! // Assuming you have a file named "coordinates.xyz"
//! let file_path = "coordinates.xyz";
//! let points = parse_xyz_file(file_path);
//! // Do something with the parsed points
//! ```
//!
//! ## Grammar
//!
//! The XYZ coordinate data is parsed according to the grammar defined in the
//! `xyz.pest` file.  This grammar specifies the allowed number formats, whitespace
//! separation, and line structure.
//!
//! ## License
//!
//! This crate is licensed under the MIT License.

#![feature(iter_array_chunks)]

mod pylib;

use pest::Parser;
use pest_derive::Parser;
use std::path::Path;

#[derive(Parser)]
#[grammar = "xyz.pest"]
struct IdentParser;

/// Parses a string containing XYZ coordinates into a vector of `[f64; 3]` arrays.
///
/// The input string should be formatted such that each line contains three
/// floating-point numbers separated by whitespace, representing the x, y, and z
/// coordinates of a point.  Newlines separate individual points.
///
/// # Arguments
///
/// * `data` - A string slice containing the XYZ coordinate data.
///
/// # Returns
///
/// A `Vec` of `[f64; 3]` arrays, where each array represents a point in 3D space.
/// Returns an empty `Vec` if the input string is empty or contains no valid lines.
///
/// # Panics
///
/// Panics if the input string is not a valid XYZ coordinate format, according
/// to the `xyz.pest` grammar.  This includes malformed numbers or incorrect
/// whitespace separation.
///
/// # Examples
///
/// ```
/// use parse_xyz_py::parse_xyz;
///
/// let data = "1.0 2.0 3.0\n4.0 5.0 6.0\n";
/// let points = parse_xyz(data);
/// assert_eq!(points, vec![[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]]);
/// ```
pub fn parse_xyz(data: &str) -> Vec<[f64; 3]> {
    let pairs = IdentParser::parse(Rule::file, data)
        .unwrap_or_else(|e| panic!("{}", e))
        .next()
        .unwrap();

    let arr: Vec<[f64; 3]> = pairs
        .into_inner()
        .filter(|pair| pair.as_rule() == Rule::line)
        .map(|line| {
            line.into_inner()
                .filter(|pair| pair.as_rule() == Rule::num)
                .map(|num| num.as_str().parse::<f64>().unwrap())
                .array_chunks::<3>()
                .next()
                .unwrap()
        })
        .collect();

    arr
}

/// Parses an XYZ coordinate file into a vector of `[f64; 3]` arrays.
///
/// This function reads the contents of the specified file and parses it
/// using the `parse_xyz` function.
///
/// # Arguments
///
/// * `file_path` - A value that can be borrowed as a `Path`, representing the
///   path to the XYZ coordinate file.
///
/// # Returns
///
/// A `Vec` of `[f64; 3]` arrays, where each array represents a point in 3D space.
/// Returns an empty `Vec` if the file is empty or contains no valid lines.
///
/// # Panics
///
/// Panics if the file cannot be read or if the file content is not a valid
/// XYZ coordinate format, according to the `xyz.pest` grammar.
///
/// # Examples
///
/// ```no_run
/// use parse_xyz_py::parse_xyz_file;
///
/// // Assuming you have a file named "coordinates.xyz"
/// let file_path = "coordinates.xyz";
/// let points = parse_xyz_file(file_path);
/// // Do something with the parsed points
/// ```
pub fn parse_xyz_file(file_path: impl AsRef<Path>) -> Vec<[f64; 3]> {
    let file = std::fs::read_to_string(file_path).unwrap();
    parse_xyz(file.as_str())
}

#[cfg(test)]
mod tests {
    use crate::parse_xyz;

    #[test]
    fn test_empty_string() {
        let data = "";
        let expected: Vec<[f64; 3]> = Vec::new();
        assert_eq!(parse_xyz(data), expected);
    }

    #[test]
    fn test_single_line() {
        let data = "1 2 3\n";
        let expected: Vec<[f64; 3]> = vec![[1.0, 2.0, 3.0]];
        assert_eq!(parse_xyz(data), expected);
    }

    #[test]
    fn test_multiple_lines() {
        let data = "1 2 3\n4 5 6\n";
        let expected: Vec<[f64; 3]> = vec![[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]];
        assert_eq!(parse_xyz(data), expected);
    }

    #[test]
    fn test_negative_numbers() {
        let data = "-1 -2 -3\n";
        let expected: Vec<[f64; 3]> = vec![[-1.0, -2.0, -3.0]];
        assert_eq!(parse_xyz(data), expected);
    }

    #[test]
    fn test_decimal_numbers() {
        let data = "1.1 2.2 3.3\n";
        let expected: Vec<[f64; 3]> = vec![[1.1, 2.2, 3.3]];
        assert_eq!(parse_xyz(data), expected);
    }

    #[test]
    fn test_mixed_numbers() {
        let data = "1 2.2 -3\n";
        let expected: Vec<[f64; 3]> = vec![[1.0, 2.2, -3.0]];
        assert_eq!(parse_xyz(data), expected);
    }

    #[test]
    fn test_exponential_numbers() {
        let data = "1e2 2.2e-1 -3e+0\n";
        let expected: Vec<[f64; 3]> = vec![[1e2, 2.2e-1, -3e+0]];
        assert_eq!(parse_xyz(data), expected);
    }

    #[test]
    fn test_extra_whitespace() {
        let data = "1   2   3\n";
        let expected: Vec<[f64; 3]> = vec![[1.0, 2.0, 3.0]];
        assert_eq!(parse_xyz(data), expected);
    }

    #[test]
    fn test_multiple_whitespace() {
        let data = "1  2   3\n";
        let expected: Vec<[f64; 3]> = vec![[1.0, 2.0, 3.0]];
        assert_eq!(parse_xyz(data), expected);
    }
}
