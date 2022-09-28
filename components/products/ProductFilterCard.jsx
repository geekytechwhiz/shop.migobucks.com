import {
  Box,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  Rating,
  TextField,
} from '@mui/material';
// import Accordion from 'components/accordion/Accordion';
// import AccordionHeader from 'components/accordion/AccordionHeader';
import { FlexBetween, FlexBox } from '../flex-box';
import { H5, H6, Paragraph, Span } from '../Typography';
import React from 'react';
import { FILTER_CATEGORIES } from '../../utils/data/index';

const ProductFilterCard = ({ category }) => {
  console.log(FILTER_CATEGORIES);
  const keys = Object.keys(FILTER_CATEGORIES[category]);
  return (
    <Card
      sx={{
        p: '18px 27px',
        overflow: 'auto',
      }}
      elevation={1}
    >
      {keys.map((x) => {
        return (
          <>
            <H6 mb={2}>{x}</H6>
            {FILTER_CATEGORIES[category][x].map((item) => (
              <FormControlLabel
                key={item}
                sx={{
                  display: 'flex',
                }}
                label={<Span color='inherit'>{item}</Span>}
                control={<Checkbox size='small' color='secondary' />}
              />
            ))}

            <Divider
              sx={{
                my: 3,
              }}
            />
          </>
        );
      })}

      <Divider
        sx={{
          my: 3,
        }}
      />

      {otherOptions.map((item) => (
        <FormControlLabel
          key={item}
          sx={{
            display: 'flex',
          }}
          label={<Span color='inherit'>{item}</Span>}
          control={<Checkbox size='small' color='secondary' />}
        />
      ))}

      <Divider
        sx={{
          my: 3,
        }}
      />

      <H6 mb={2}>Ratings</H6>
      {[5, 4, 3, 2, 1].map((item) => (
        <FormControlLabel
          control={<Checkbox size='small' color='secondary' />}
          label={<Rating size='small' value={item} color='warn' readOnly />}
          sx={{
            display: 'flex',
          }}
          key={item}
        />
      ))}

      <Divider
        sx={{
          my: 3,
        }}
      />

      <H6 mb={2}>Colors</H6>
      <FlexBox mb={2} flexWrap='wrap' gap={1}>
        {colorList.map((item) => (
          <Box
            flexShrink={0}
            sx={{
              width: 25,
              height: 25,
              bgcolor: item,
              cursor: 'pointer',
              borderRadius: '50%',
            }}
            key={item}
          />
        ))}
      </FlexBox>
    </Card>
  );
};

const categroyList = [
  {
    title: 'Bath Preparations',
    subCategories: ['Bubble Bath', 'Bath Capsules', 'Others'],
  },
  {
    title: 'Eye Makeup Preparations',
  },
  {
    title: 'Fragrance',
  },
  {
    title: 'Hair Preparations',
  },
];
const brandList = ['Maccs', 'Karts', 'Baars', 'Bukks', 'Luasis'];
const otherOptions = ['On Sale', 'In Stock', 'Featured'];
const colorList = [
  '#1C1C1C',
  '#FF7A7A',
  '#FFC672',
  '#84FFB5',
  '#70F6FF',
  '#6B7AFF',
];
export default ProductFilterCard;
