# parse-xyz-py

A fast and efficient Rust-powered Python library for parsing XYZ coordinate data from strings and files.

## Overview

`parse-xyz-py` is a Python package that leverages the speed and robustness of Rust to efficiently parse XYZ coordinate data.
It's ideal for scientific computing, data analysis, and any application that requires processing large XYZ coordinate datasets.
The core parsing logic is written in Rust, offering significant performance improvements over pure Python implementations.

## Features

*   **High Performance:**  Rust-based parsing for optimal speed.
*   **Easy to Use:**  Simple Python API for seamless integration.
*   **String and File Input:** Parses XYZ data from strings or files.
*   **NumPy Integration:** Returns parsed data as NumPy arrays.
*   **Flexible Number Formats:** Supports integers, decimals, and exponential notation.
*   **Comprehensive Testing:**  Well-tested for reliability and accuracy.

## Usage

Here's how to use `parse-xyz-py` in your Python projects:

### Parsing from a String

```python
import parse_xyz_py
import numpy as np

xyz_data = """
1.0 2.0 3.0
4.0 5.0 6.0
7.0 8.0 9.0
"""

coordinates = parse_xyz_py.parse_xyz(xyz_data)
print(coordinates)
# Output:
# [[1. 2. 3.]
#  [4. 5. 6.]
#  [7. 8. 9.]]

print(type(coordinates))
# Output: <class 'numpy.ndarray'>
```

### Parsing from a File

```python
import parse_xyz_py
import numpy as np

file_path = "path/to/your/coordinates.xyz"  # Replace with your actual file path

coordinates = parse_xyz_py.parse_xyz_file(file_path)
print(coordinates)
# Output:
# NumPy array containing the XYZ coordinates from the file.
```

**Example XYZ file (`coordinates.xyz`):**

```
1.1 2.2 3.3
-4 5.5 6.6e2
7 8.8 -9.9
```

## Contributing

We welcome contributions!  If you find a bug or have a feature request, please open an issue.  If you'd like to contribute code, please submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
