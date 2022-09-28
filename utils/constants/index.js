/* eslint-disable import/prefer-default-export */
export const RESOURCE_INVENTORY = "inventory";
export const RESOURCE_DOCUMENT_VERIFICATION = "account_verification";
export const ORIGIN = "brand";
export const UPLOADED_PATH =
  "https://mibuploaddev.s3.ap-south-1.amazonaws.com/inbound/inbound/inventory/brand/";

export const NOT_FOUND_STATUS_CODE = 404;
export const UNAUTHORIZED_STATUS_CODE = 401;
export const INTERNAL_SERVER_ERROR = 500;
export const STATUS_CODE_SUCCESS = 200;
export const SYSTEM_ERROR_MSG = "System Error";
export const NOT_FOUND_ERROR_MSG = "Given Email id is not found in our system";
export const UNAUTHORIZED_ERROR_MSG = "Incorrect email or password";
export const INTERNAL_SERVER_ERROR_MSG =
  "Something happened in our backend system. Please contact our support team";

export const REQUIRED_FIELDS_SIGN_UP = [
  "Name",
  "Mobile",
  "EmailId",
  "Password",
];

export const PRODUCT_TYPES = ["EXCLUSIVE", "COMBO"];
export const REQUIRED_FIELDS_CATEGORY = ["Category", "ProductCategory"];
export const REQUIRED_FIELDS_VITAL_INFO = [
  "ProductBrand",
  "Tittle",
  "Manufacturer",
  "UnitCount",
  "UnitType",
];

export const REQUIRED_FIELDS_OFFER = [
  "YourPrice",
  "Quantity",
  "MRP",
  "SellingPrice",
  "CountryOfOrigin",
];
export const REQUIRED_FIELDS_DESCRIPTION = ["ProductDescription"];
export const REQUIRED_FIELDS_MEDIAS = ["ImageLinks"];

export const ALL_REQUIRED_FIELDS = [
  "Category",
  "ProductCategory",
  "ProductDescription",
  "ProductBrand",
  "Tittle",
  "Manufacturer",
  "NumberOfItems",
  "UnitCount",
  "UnitType",
  "MRP",
  "SellingPrice",
  "CountryOfOrigin",
];

export const MORE_DETAILS_REQUIRED_FIELDS = ["BuddyMargin", "LoyaltyPoint"];

export const ORDER_STATUS = [
  "CANCELLED",
  "PENDING_LABEL",
  "DELIVERED",
  "PENDING_HANDOVER",
  "IN_TRANSIT",
  "READY_TO_DISPATCH",
];
export const RETURN_ORDER_STATUS = [
  "RETURNED",
  "RETURNED_READY_FOR_PICKUP",
  "DELIVERED",
  "IN_TRANSIT",
  "REJECTED",
];

export const ORDER_STATUS_REJECTED = "REJECTED";
export const ORDER_STATUS_RETURNED_READY_FOR_PICKUP =
  "RETURNED_READY_FOR_PICKUP";
export const ORDER_STATUS_APPROVED = "APPROVED";
export const ORDER_STATUS_CANCELLED = "CANCELLED";
export const ORDER_STATUS_PENDING_LABEL = "PENDING_LABEL";
export const ORDER_STATUS_DELIVERED = "DELIVERED";
export const ORDER_STATUS_PENDING_HANDOVER = "PENDING_HANDOVER";
export const ORDER_STATUS_IN_TRANSIT = "IN_TRANSIT";
export const ORDER_STATUS_READY_TO_DISPATCH = "READY_TO_DISPATCH";

export const PRODUCT_STATUS_INACTIVE = "INACTIVE";
export const PRODUCT_STATUS_PUBLISHED = "PUBLISHED";
export const PRODUCT_STATUS_DRAFTED = "DRAFTED";
export const PRODUCT_STATUS_DELETED = "DELETED";

export const DOCUMENT_TYPE_LIST = [
  {
    label: "Aadhaar Card",
    value: "AadhaarCard",
  },
  {
    label: "Voter Id",
    value: "VoterId",
  },
];
export const ACCOUNT_TYPE_LIST = [
  {
    label: "Savings Account",
    value: "SavingsAccount",
  },
  {
    label: "Current Account",
    value: "CurrentAccount",
  },
];

export const UPDATE_STATUS_LIST = [
  "DELETED",
  "INACTIVE",
  "DRAFTED",
  "PUBLISHED",
];

export const DOCUMENT_AADHAAR_FRONT = "aadhaarfront";
export const DOCUMENT_AADHAAR_BACK = "aadhaarback";
export const DOCUMENT_COMPANY_PROOF = "proof";
export const DOCUMENT_COMPANY_PAN = "companypan";
