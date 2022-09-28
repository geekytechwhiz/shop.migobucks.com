import { Rating } from '@mui/material';
import { compose, spacing, typography } from '@mui/system';

import { styled } from '@mui/material/styles';
const MBRating = styled(Rating)(compose(spacing, typography));
MBRating.defaultProps = {
  fontSize: '1.25rem',
};
export default MBRating;
