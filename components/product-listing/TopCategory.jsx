import MBCard from '../MBCard';
import Carousel from '../carousel/Carousel';
import CategorySectionCreator from '../CategorySectionCreator';
import Category from '../icons/Category';
import TopCategoryCard from '../product-cards/TopCategoryCard';
import useWindowSize from '../../hooks/useWindowSize';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const TopCategory = ({ categoryList }) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 650) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);
  return (
    <CategorySectionCreator
      icon={<Category color='primary' />}
      title='Top Categories'
      seeMoreLink='#'
    >
      <Carousel totalSlides={5} visibleSlides={visibleSlides}>
        {categoryList.map((item, ind) => (
          <Link href={item.categoryUrl || ''} key={ind} passHref>
            <a>
              <MBCard
                sx={{
                  p: 2,
                }}
                elevation={0}
              >
                <TopCategoryCard
                  title={item.Title}
                  subtitle={item.ProductName || ''}
                  imgUrl={item.ImageUrl}
                />
              </MBCard>
            </a>
          </Link>
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

export default TopCategory;
