// 统一导入
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('../icons/', true, /\.svg$/))
} catch (error) {
}