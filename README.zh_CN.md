# parse-xyz-py

一个快速高效的 Rust 驱动的 Python 库，用于解析字符串和文件中的 XYZ 坐标数据。

## 概述

`parse-xyz-py` 是一个 Python 包，它利用 Rust 的速度和鲁棒性来高效地解析 XYZ 坐标数据。
它是科学计算、数据分析以及任何需要处理大型 XYZ 坐标数据集的应用程序的理想选择。
核心解析逻辑是用 Rust 编写的，与纯 Python 实现相比，性能得到了显着提高。

## 特性

*   **高性能：** 基于 Rust 的解析，实现最佳速度。
*   **易于使用：** 简单的 Python API，实现无缝集成。
*   **字符串和文件输入：** 从字符串或文件中解析 XYZ 数据。
*   **NumPy 集成：** 将解析后的数据作为 NumPy 数组返回。
*   **灵活的数字格式：** 支持整数、小数和指数表示法。
*   **全面的测试：** 经过充分测试，保证可靠性和准确性。

## 用法

以下是如何在您的 Python 项目中使用 `parse-xyz-py`：

### 从字符串解析

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
# 输出:
# [[1. 2. 3.]
#  [4. 5. 6.]
#  [7. 8. 9.]]

print(type(coordinates))
# 输出: <class 'numpy.ndarray'>
```

### 从文件解析

```python
import parse_xyz_py
import numpy as np

file_path = "path/to/your/coordinates.xyz"  # 替换为您的实际文件路径

coordinates = parse_xyz_py.parse_xyz_file(file_path)
print(coordinates)
# 输出:
# 包含文件中 XYZ 坐标的 NumPy 数组。
```

**示例 XYZ 文件 (`coordinates.xyz`):**

```
1.1 2.2 3.3
-4 5.5 6.6e2
7 8.8 -9.9
```

## 贡献

欢迎贡献！ 如果您发现错误或有功能请求，请提出 issue。 如果您想贡献代码，请提交 pull request。

## 许可证

该项目根据 MIT 许可证获得许可 - 有关详细信息，请参阅 [LICENSE](LICENSE) 文件。
