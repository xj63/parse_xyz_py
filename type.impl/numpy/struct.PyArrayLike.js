(function() {
    var type_impls = Object.fromEntries([["numpy",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PyArrayLike%3C'py,+T,+D,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/array_like.rs.html#117\">Source</a><a href=\"#impl-Debug-for-PyArrayLike%3C'py,+T,+D,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"numpy/struct.PyArrayLike.html\" title=\"struct numpy::PyArrayLike\">PyArrayLike</a>&lt;'py, T, D, C&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    D: <a class=\"trait\" href=\"ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    C: Coerce + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/array_like.rs.html#117\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.85.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.85.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","numpy::array_like::PyArrayLike0","numpy::array_like::PyArrayLike1","numpy::array_like::PyArrayLike2","numpy::array_like::PyArrayLike3","numpy::array_like::PyArrayLike4","numpy::array_like::PyArrayLike5","numpy::array_like::PyArrayLike6","numpy::array_like::PyArrayLikeDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-PyArrayLike%3C'py,+T,+D,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/array_like.rs.html#125-136\">Source</a><a href=\"#impl-Deref-for-PyArrayLike%3C'py,+T,+D,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"numpy/struct.PyArrayLike.html\" title=\"struct numpy::PyArrayLike\">PyArrayLike</a>&lt;'py, T, D, C&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a>,\n    D: <a class=\"trait\" href=\"ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a>,\n    C: Coerce,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/numpy/array_like.rs.html#131\">Source</a><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = <a class=\"struct\" href=\"numpy/borrow/struct.PyReadonlyArray.html\" title=\"struct numpy::borrow::PyReadonlyArray\">PyReadonlyArray</a>&lt;'py, T, D&gt;</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/array_like.rs.html#133-135\">Source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.85.1/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","numpy::array_like::PyArrayLike0","numpy::array_like::PyArrayLike1","numpy::array_like::PyArrayLike2","numpy::array_like::PyArrayLike3","numpy::array_like::PyArrayLike4","numpy::array_like::PyArrayLike5","numpy::array_like::PyArrayLike6","numpy::array_like::PyArrayLikeDyn"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromPyObject%3C'py%3E-for-PyArrayLike%3C'py,+T,+D,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/numpy/array_like.rs.html#138-182\">Source</a><a href=\"#impl-FromPyObject%3C'py%3E-for-PyArrayLike%3C'py,+T,+D,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'py, T, D, C&gt; <a class=\"trait\" href=\"pyo3/conversion/trait.FromPyObject.html\" title=\"trait pyo3::conversion::FromPyObject\">FromPyObject</a>&lt;'py&gt; for <a class=\"struct\" href=\"numpy/struct.PyArrayLike.html\" title=\"struct numpy::PyArrayLike\">PyArrayLike</a>&lt;'py, T, D, C&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"numpy/trait.Element.html\" title=\"trait numpy::Element\">Element</a> + 'py,\n    D: <a class=\"trait\" href=\"ndarray/dimension/dimension_trait/trait.Dimension.html\" title=\"trait ndarray::dimension::dimension_trait::Dimension\">Dimension</a> + 'py,\n    C: Coerce,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;: <a class=\"trait\" href=\"pyo3/conversion/trait.FromPyObject.html\" title=\"trait pyo3::conversion::FromPyObject\">FromPyObject</a>&lt;'py&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extract_bound\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/numpy/array_like.rs.html#145-181\">Source</a><a href=\"#method.extract_bound\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"pyo3/conversion/trait.FromPyObject.html#tymethod.extract_bound\" class=\"fn\">extract_bound</a>(ob: &amp;<a class=\"struct\" href=\"pyo3/instance/struct.Bound.html\" title=\"struct pyo3::instance::Bound\">Bound</a>&lt;'py, <a class=\"struct\" href=\"pyo3/types/any/struct.PyAny.html\" title=\"struct pyo3::types::any::PyAny\">PyAny</a>&gt;) -&gt; <a class=\"type\" href=\"pyo3/err/type.PyResult.html\" title=\"type pyo3::err::PyResult\">PyResult</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Extracts <code>Self</code> from the bound smart pointer <code>obj</code>. <a href=\"pyo3/conversion/trait.FromPyObject.html#tymethod.extract_bound\">Read more</a></div></details></div></details>","FromPyObject<'py>","numpy::array_like::PyArrayLike0","numpy::array_like::PyArrayLike1","numpy::array_like::PyArrayLike2","numpy::array_like::PyArrayLike3","numpy::array_like::PyArrayLike4","numpy::array_like::PyArrayLike5","numpy::array_like::PyArrayLike6","numpy::array_like::PyArrayLikeDyn"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[7875]}