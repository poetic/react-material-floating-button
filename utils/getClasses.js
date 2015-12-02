getClasses = function getClasses(props){
  return classNames({
    'mfb-zoomin': props.effect === 'zoomin',
    'mfb-slidein': props.effect === 'slidein',
    'mfb-slidein-spring': props.effect === 'slidein-spring',
    'mfb-fountain': props.effect === 'fountain',
    'mfb-component--tl': props.position === 'tl',
    'mfb-component--tr': props.position === 'tr',
    'mfb-component--bl': props.position === 'bl',
    'mfb-component--br': props.position === 'br'
  }, props.className);
}
