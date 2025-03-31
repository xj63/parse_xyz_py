searchState.loadedDescShard("target_lexicon", 0, "LLVM target triple types.\nApple Aarch64 platforms use their own variant of the …\nThe “architecture” field, which in some cases also …\nThe “binary format” field, which is usually omitted, …\nThe C data model used on a target.\nThe calling convention, which specifies things like which …\nA custom vendor. “Custom” in this context means that …\nA string for a <code>Vendor::Custom</code> that can either be used in …\nThe general Darwin core OS.\nA simple wrapper around <code>Triple</code> that provides an …\nA simple wrapper around <code>Triple</code> that provides an …\nThe minimum OS version that we’re compiling for.\nThe target memory endianness.\nThe “environment” field, which specifies an ABI …\nThe <code>Triple</code> of the current host.\nThe data model used most commonly on Win32 and 32-bit Unix …\nA rare data model used on early 64-bit Unix systems\nThe data model used most commonly on Win64\nThe data model used most commonly on Win16. <code>long</code> and …\nThe data model used most commonly on 64-bit Unix systems\nmacOS.\nAn enum for all 32-bit MIPS architectures (not just “…\nAn enum for all 64-bit MIPS architectures (not just “…\nThe “operating system” field, which sometimes implies …\nAn owned <code>String</code>. This supports the general case.\nAn error returned from parsing a triple.\nThe width of a pointer (in the default address space).\nAn enum for all 32-bit RISC-V architectures.\nAn enum for all 64-bit RISC-V architectures.\nThe size of a type.\nA static <code>str</code>, so that <code>CustomVendor</code> can be constructed in …\n“System V”, which is used on most Unix-like platfoms. …\nAn LLVM target “triple”. Historically such things had …\nThe “vendor” field, which in practice is little more …\nThe WebAssembly C ABI. …\n“Windows Fastcall”, which is used on Windows. Note …\nAn enum for all 32-bit x86 architectures.\nx86_64 target that only supports Haswell-compatible Intel …\nAn alternate name for visionOS.\nThe “architecture” (and sometimes the subarchitecture).\nExtracts a string slice.\nExtracts a string slice.\nThe “binary format” (rarely used).\nReturn the number of bits this <code>Size</code> represents.\nReturn the number of bits in a pointer.\nReturn the number of bytes in a size.\nReturn the number of bytes in a pointer.\nThe C data model for a given target. If the model is not …\nReturn the default calling convention for the given target …\nThe size of a C <code>double</code>.\nReturn the endianness of this architecture.\nReturn the endianness of this architecture.\nReturn the endianness of this architecture.\nReturn the endianness of this target’s architecture.\nThe “environment” on top of the operating system …\nThe size of a C <code>float</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParse a triple from an LLVM target triple.\nReturn the architecture for the current host.\nReturn the vendor for the current host.\nReturn the operating system for the current host.\nReturn the environment for the current host.\nReturn the binary format for the current host.\nReturn the triple for the current host.\nThe size of a C <code>int</code>. This is required to be at least 16 …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert into a string\nConvert into a string\nConvert into a string\nConvert into a string\nConvert into a string\nConvert into a string\nConvert into a string\nConvert into a string\nConvert into a string\nConvert into a string\nConvert into a string\nConvert into a string\nChecks if this Architecture is some variant of Clever-ISA\nWhether the OS is similar to Darwin.\nTest if this architecture uses the Thumb instruction set.\nTest if this architecture uses the Thumb instruction set.\nThe size of a C <code>long long</code>. This is required (in C99+) to …\nThe size of a C <code>long</code>. This is required to be at least 32 …\nThe “operating system” (sometimes also the …\nThe width of a pointer (in the default address space).\nReturn the pointer bit width of this target’s …\nReturn the pointer bit width of this target’s …\nReturn the pointer bit width of this target’s …\nReturn the pointer width of this target’s architecture.\nThe size of a C <code>short</code>. This is required to be at least 16 …\nA convenient syntax for triple literals.\nReturn a <code>Triple</code> with all unknown fields.\nThe “vendor” (whatever that means).")