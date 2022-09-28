import { compose, display, spacing } from '@mui/system';
import { styled } from '@mui/material/styles';
const MBImage = styled('img')(compose(spacing, display));
MBImage.defaultProps = {
  display: 'block',
};
export default MBImage; // compose,
// borders,
// display,
// flexbox,
// palette,
// positions,
// shadows,
// sizing,
// spacing,
// typography
