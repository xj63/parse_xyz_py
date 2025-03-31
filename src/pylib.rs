//! # `parse_xyz_py` Python Module
//!
//! This module provides Python bindings for parsing XYZ coordinate data. It allows
//! reading XYZ coordinate data from strings and files, and converting the data
//! into NumPy arrays.
//!
//! ## Functions
//!
//! *   [`parse_xyz`] - Parses XYZ coordinate data from a string.
//! *   [`parse_xyz_file`] - Parses XYZ coordinate data from a file.

use numpy::ndarray::arr2;
use numpy::{IntoPyArray, PyArray2};
use pyo3::prelude::*;

/// Parses XYZ coordinate data from a string and returns a NumPy array.
///
/// This function takes a string containing XYZ coordinate data and parses it
/// into a NumPy array. The string should contain space-separated X, Y, and Z
/// coordinates, with each line representing a point.
///
/// # Arguments
///
/// *   `py` - The Python interpreter context.
/// *   `data` - A string containing the XYZ coordinate data.
///
/// # Returns
///
/// A `PyResult<Py<PyArray2<f64>>>` containing the parsed NumPy array if successful.
/// Returns a `PyResult` error if parsing fails.
///
/// # Example
///
/// ```python
/// import parse_xyz_py
/// import numpy as np
///
/// data = "1.0 2.0 3.0\n4.0 5.0 6.0"
/// result = parse_xyz_py.parse_xyz(data)
/// print(result)
/// # Expected output:
/// # [[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]]
/// ```
#[pyfunction]
fn parse_xyz(py: Python<'_>, data: &str) -> PyResult<Py<PyArray2<f64>>> {
    let vector = crate::parse_xyz(data);
    let array = arr2(vector.as_slice());
    Ok(array.into_pyarray(py).into())
}

/// Parses XYZ coordinate data from a file and returns a NumPy array.
///
/// This function takes a file path, reads the file content, and parses it
/// into a NumPy array. The file content should contain space-separated X, Y, and Z
/// coordinates, with each line representing a point.
///
/// # Arguments
///
/// *   `py` - The Python interpreter context.
/// *   `file_path` - The path to the file containing the XYZ coordinate data.
///
/// # Returns
///
/// A `PyResult<Py<PyArray2<f64>>>` containing the parsed NumPy array if successful.
/// Returns a `PyResult` error if file reading or parsing fails.
///
/// # Example
///
/// ```python
/// import parse_xyz_py
/// import numpy as np
///
/// file_path = "coordinates.xyz"
/// result = parse_xyz_py.parse_xyz_file(file_path)
/// print(result)
/// ```
#[pyfunction]
fn parse_xyz_file(py: Python<'_>, file_path: &str) -> PyResult<Py<PyArray2<f64>>> {
    let data = std::fs::read_to_string(file_path)?;
    parse_xyz(py, &data)
}

/// Defines the `parse_xyz_py` Python module.
///
/// This function uses the `#[pymodule]` macro to define the entry point for the
/// Python module. It registers the [`parse_xyz`] and [`parse_xyz_file`] functions
/// as functions within the module.
#[pymodule]
fn parse_xyz_py(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(parse_xyz_file, m)?)?;
    Ok(())
}
