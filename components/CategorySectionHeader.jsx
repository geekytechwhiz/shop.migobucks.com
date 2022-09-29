import ArrowRight from "@mui/icons-material/ArrowRight";
import Link from "next/link";
import React from "react";
import { FlexBetween, FlexBox } from "./flex-box";
import { H2 } from "./Typography"; // ===================================================

// ===================================================
const CategorySectionHeader = ({ title, seeMoreLink, icon }) => {
  return (
    <FlexBetween mb={3}>
      <FlexBox alignItems="center" gap={1}>
        {icon && <FlexBox alignItems="center">{icon}</FlexBox>}
        <H2 fontWeight="bold" lineHeight="1">
          {title}
        </H2>
      </FlexBox>

      {seeMoreLink && (
        <Link href={seeMoreLink}>
          <a>
            <FlexBox alignItems="center" ml={1} color="grey.600">
              View all
              <ArrowRight fontSize="small" color="inherit" />
            </FlexBox>
          </a>
        </Link>
      )}
    </FlexBetween>
  );
};

export default CategorySectionHeader;
