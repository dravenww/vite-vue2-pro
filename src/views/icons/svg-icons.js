const svgs = import.meta.glob('../../icons/svg/*.svg');

const svgIcons = Object.keys(svgs).map(item => {
  return item.replace('../../icons/svg/', '').replace('.svg','');
});

export default svgIcons
