import {Component, createElement} from 'rax';
import {isWeex} from 'universal-env';
import View from 'rax-view';
import Text from 'rax-text';

const styles = {
  initial: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  }
};

function TimePicker(props) {
  const {
    selectedValue,
    onTimeChange,
    style,
  } = props;

  let touchableStyle = {
    ...styles.initial,
    ...style,
  };
  let textStyle = {
    color: touchableStyle.color,
    fontSize: touchableStyle.fontSize,
    fontStyle: touchableStyle.fontStyle,
    fontWeight: touchableStyle.fontWeight,
    textAlign: touchableStyle.textAlign,
    textDecoration: touchableStyle.textDecoration,
    textOverflow: touchableStyle.textOverflow,
    lineHeight: touchableStyle.lineHeight
  };

  function handleClick() {
    if (isWeex) {
      const picker = __weex_require__('@weex-module/picker');

      picker.pickTime({
        value: selectedValue,
      }, event => {
        if (event.result === 'success') {
          onTimeChange && onTimeChange(event.data);
        }
      });
    }
  }

  if (isWeex) {
    return (
      <View {...this.props} onClick={handleClick} style={touchableStyle}>
        <Text style={textStyle}>
          {selectedValue}
        </Text>
      </View>
    );
  } else {
    return (
      <input
        type="time"
        value={selectedValue}
        onChange={(e) => {
          onTimeChange && onTimeChange(e.target.value);
        }}
        style={style} />
    );
  }
}

export default TimePicker;
