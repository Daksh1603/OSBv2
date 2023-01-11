import * as React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Icon from "@mui/material/Icon";
import { WatchLater } from "@mui/icons-material";
export {
  Close as CloseIcon,
  Add as AddIcon,
  Share as ShareIcon,
  Link as FileLinkIcon,
  MoreHoriz as Dots,
} from "@mui/icons-material";

export const CircleIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 15 15" {...props}>
    <path d="M7.5 0C3.35685 0 0 3.35685 0 7.5C0 11.6431 3.35685 15 7.5 15C11.6431 15 15 11.6431 15 7.5C15 3.35685 11.6431 0 7.5 0ZM7.5 13.5484C4.15827 13.5484 1.45161 10.8417 1.45161 7.5C1.45161 4.15827 4.15827 1.45161 7.5 1.45161C10.8417 1.45161 13.5484 4.15827 13.5484 7.5C13.5484 10.8417 10.8417 13.5484 7.5 13.5484Z" />
  </SvgIcon>
);

export const SquareCirclesIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 15 15" {...props}>
    <path d="M2.10938 4.21875C0.946312 4.21875 0 3.27244 0 2.10938C0 0.946312 0.946312 0 2.10938 0C3.27244 0 4.21875 0.946312 4.21875 2.10938C4.21875 3.27244 3.27244 4.21875 2.10938 4.21875ZM2.10938 1.17188C1.59245 1.17188 1.17188 1.59245 1.17188 2.10938C1.17188 2.6263 1.59245 3.04688 2.10938 3.04688C2.6263 3.04688 3.04688 2.6263 3.04688 2.10938C3.04688 1.59245 2.6263 1.17188 2.10938 1.17188ZM2.10938 15C0.946312 15 0 14.0537 0 12.8906C0 11.7276 0.946312 10.7812 2.10938 10.7812C3.27244 10.7812 4.21875 11.7276 4.21875 12.8906C4.21875 14.0537 3.27244 15 2.10938 15ZM2.10938 11.9531C1.59245 11.9531 1.17188 12.3737 1.17188 12.8906C1.17188 13.4076 1.59245 13.8281 2.10938 13.8281C2.6263 13.8281 3.04688 13.4076 3.04688 12.8906C3.04688 12.3737 2.6263 11.9531 2.10938 11.9531ZM2.10938 9.60938C0.946312 9.60938 0 8.66306 0 7.5C0 6.33694 0.946312 5.39062 2.10938 5.39062C3.27244 5.39062 4.21875 6.33694 4.21875 7.5C4.21875 8.66306 3.27244 9.60938 2.10938 9.60938ZM2.10938 6.5625C1.59245 6.5625 1.17188 6.98307 1.17188 7.5C1.17188 8.01693 1.59245 8.4375 2.10938 8.4375C2.6263 8.4375 3.04688 8.01693 3.04688 7.5C3.04688 6.98307 2.6263 6.5625 2.10938 6.5625ZM12.8906 4.21875C11.7276 4.21875 10.7812 3.27244 10.7812 2.10938C10.7812 0.946312 11.7276 0 12.8906 0C14.0537 0 15 0.946312 15 2.10938C15 3.27244 14.0537 4.21875 12.8906 4.21875ZM12.8906 1.17188C12.3737 1.17188 11.9531 1.59245 11.9531 2.10938C11.9531 2.6263 12.3737 3.04688 12.8906 3.04688C13.4076 3.04688 13.8281 2.6263 13.8281 2.10938C13.8281 1.59245 13.4076 1.17188 12.8906 1.17188ZM12.8906 15C11.7276 15 10.7812 14.0537 10.7812 12.8906C10.7812 11.7276 11.7276 10.7812 12.8906 10.7812C14.0537 10.7812 15 11.7276 15 12.8906C15 14.0537 14.0537 15 12.8906 15ZM12.8906 11.9531C12.3737 11.9531 11.9531 12.3737 11.9531 12.8906C11.9531 13.4076 12.3737 13.8281 12.8906 13.8281C13.4076 13.8281 13.8281 13.4076 13.8281 12.8906C13.8281 12.3737 13.4076 11.9531 12.8906 11.9531ZM12.8906 9.60938C11.7276 9.60938 10.7812 8.66306 10.7812 7.5C10.7812 6.33694 11.7276 5.39062 12.8906 5.39062C14.0537 5.39062 15 6.33694 15 7.5C15 8.66306 14.0537 9.60938 12.8906 9.60938ZM12.8906 6.5625C12.3737 6.5625 11.9531 6.98307 11.9531 7.5C11.9531 8.01693 12.3737 8.4375 12.8906 8.4375C13.4076 8.4375 13.8281 8.01693 13.8281 7.5C13.8281 6.98307 13.4076 6.5625 12.8906 6.5625ZM7.5 4.21875C6.33694 4.21875 5.39062 3.27244 5.39062 2.10938C5.39062 0.946312 6.33694 0 7.5 0C8.66306 0 9.60938 0.946312 9.60938 2.10938C9.60938 3.27244 8.66306 4.21875 7.5 4.21875ZM7.5 1.17188C6.98307 1.17188 6.5625 1.59245 6.5625 2.10938C6.5625 2.6263 6.98307 3.04688 7.5 3.04688C8.01693 3.04688 8.4375 2.6263 8.4375 2.10938C8.4375 1.59245 8.01693 1.17188 7.5 1.17188ZM7.5 15C6.33694 15 5.39062 14.0537 5.39062 12.8906C5.39062 11.7276 6.33694 10.7812 7.5 10.7812C8.66306 10.7812 9.60938 11.7276 9.60938 12.8906C9.60938 14.0537 8.66306 15 7.5 15ZM7.5 11.9531C6.98307 11.9531 6.5625 12.3737 6.5625 12.8906C6.5625 13.4076 6.98307 13.8281 7.5 13.8281C8.01693 13.8281 8.4375 13.4076 8.4375 12.8906C8.4375 12.3737 8.01693 11.9531 7.5 11.9531ZM7.5 9.60938C6.33694 9.60938 5.39062 8.66306 5.39062 7.5C5.39062 6.33694 6.33694 5.39062 7.5 5.39062C8.66306 5.39062 9.60938 6.33694 9.60938 7.5C9.60938 8.66306 8.66306 9.60938 7.5 9.60938ZM7.5 6.5625C6.98307 6.5625 6.5625 6.98307 6.5625 7.5C6.5625 8.01693 6.98307 8.4375 7.5 8.4375C8.01693 8.4375 8.4375 8.01693 8.4375 7.5C8.4375 6.98307 8.01693 6.5625 7.5 6.5625Z" />
  </SvgIcon>
);

export const ChartIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 18 18" {...props}>
    <path d="M17.5781 15.75C17.8102 15.75 18 16.0031 18 16.3125V17.4375C18 17.7469 17.8102 18 17.5781 18H0.421875C0.189844 18 0 17.7469 0 17.4375V0.5625C0 0.253125 0.189844 0 0.421875 0H1.26562C1.49766 0 1.6875 0.253125 1.6875 0.5625V15.75H17.5781ZM5.0625 12.9375V9.5625C5.0625 9.25313 4.87266 9 4.64062 9H3.79688C3.56484 9 3.375 9.25313 3.375 9.5625V12.9375C3.375 13.2469 3.56484 13.5 3.79688 13.5H4.64062C4.87266 13.5 5.0625 13.2469 5.0625 12.9375ZM8.4375 12.9375V3.5625C8.4375 3.25312 8.24766 3 8.01562 3H7.17188C6.93984 3 6.75 3.25312 6.75 3.5625V12.9375C6.75 13.2469 6.93984 13.5 7.17188 13.5H8.01562C8.24766 13.5 8.4375 13.2469 8.4375 12.9375ZM11.8125 12.9375V6.5625C11.8125 6.25313 11.6227 6 11.3906 6H10.5469C10.3148 6 10.125 6.25313 10.125 6.5625V12.9375C10.125 13.2469 10.3148 13.5 10.5469 13.5H11.3906C11.6227 13.5 11.8125 13.2469 11.8125 12.9375ZM15.1875 12.9375V2.0625C15.1875 1.75312 14.9977 1.5 14.7656 1.5H13.9219C13.6898 1.5 13.5 1.75312 13.5 2.0625V12.9375C13.5 13.2469 13.6898 13.5 13.9219 13.5H14.7656C14.9977 13.5 15.1875 13.2469 15.1875 12.9375Z" />
  </SvgIcon>
);

export const CubeIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 15 15" {...props}>
    <path d="M14.7154 4.67882L7.8599 0.108491C7.6259 -0.0355037 7.37618 -0.0368221 7.14005 0.108491L0.284589 4.67882C0.108808 4.79598 0 5.00527 0 5.21451V9.78481C0 9.99408 0.108808 10.2033 0.284619 10.3205L7.14007 14.8915C7.37407 15.0355 7.62379 15.0368 7.85993 14.8915L14.7154 10.3205C14.8912 10.2034 15 9.99408 15 9.78481V5.21451C15 5.00527 14.8912 4.79598 14.7154 4.67882ZM8.14452 1.84952L13.1919 5.21451L10.9403 6.72123L8.14452 4.85457V1.84952ZM6.85546 1.84952V4.85457L4.05969 6.72123L1.80802 5.21451L6.85546 1.84952ZM1.28906 6.41988L2.90457 7.49968L1.28906 8.57948V6.41988ZM6.85546 13.1498L1.80802 9.78484L4.05969 8.27813L6.85546 10.1448V13.1498ZM7.49999 9.02312L5.22318 7.49968L7.49999 5.97624L9.77679 7.49968L7.49999 9.02312ZM8.14452 13.1498V10.1448L10.9403 8.27813L13.1919 9.78484L8.14452 13.1498ZM13.7109 8.57948L12.0954 7.49968L13.7109 6.41988V8.57948Z" />
  </SvgIcon>
);

export const InfoIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 10 10" {...props}>
    <path d="M4.49992 0.833374C2.19992 0.833374 0.333252 2.70004 0.333252 5.00004C0.333252 7.30004 2.19992 9.16671 4.49992 9.16671C6.79992 9.16671 8.66659 7.30004 8.66659 5.00004C8.66659 2.70004 6.79992 0.833374 4.49992 0.833374ZM4.91659 7.08337H4.08325V4.58337H4.91659V7.08337ZM4.91659 3.75004H4.08325V2.91671H4.91659V3.75004Z" />
  </SvgIcon>
);

export const FolderIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox={"0 0 16 16"} {...props}>
    <path
      d="M5.65625 0.65625L7 2H12.3438C12.6979 2 13 2.13542 13.25 2.40625C13.5208 2.67708 13.6562 2.98958 13.6562 3.34375V10C13.6562 10.3542 13.5208 10.6667 13.25 10.9375C13 11.2083 12.6979 11.3438 12.3438 11.3438H1.65625C1.30208 11.3438 0.989583 11.2083 0.71875 10.9375C0.46875 10.6667 0.34375 10.3542 0.34375 10V2C0.34375 1.64583 0.46875 1.33333 0.71875 1.0625C0.989583 0.791667 1.30208 0.65625 1.65625 0.65625H5.65625Z"
      fill="white"
    />
  </SvgIcon>
);

export const LoadingIcon = (props: SvgIconProps) => <WatchLater {...props} />;

export const ArrowRight = (props: SvgIconProps) => (
  <SvgIcon viewBox={"0 0 7 11"} {...props}>
    <path d="M6.76154 6.08419L2.15332 10.7577C1.83482 11.0808 1.31978 11.0808 1.00466 10.7577L0.238882 9.9811C-0.0796273 9.65808 -0.0796273 9.13574 0.238882 8.81615L3.50529 5.50344L0.238882 2.19072C-0.0796273 1.8677 -0.0796273 1.34536 0.238882 1.02577L1.00127 0.242268C1.31978 -0.080756 1.83482 -0.080756 2.14994 0.242268L6.75815 4.91581C7.08005 5.23883 7.08005 5.76117 6.76154 6.08419Z" />
  </SvgIcon>
);

export const ArrowLeft = (props: SvgIconProps) => (
  <SvgIcon viewBox={"0 0 7 11"} {...props}>
    <path d="M0.238461 4.91581L4.84668 0.242269C5.16518 -0.0807552 5.68022 -0.0807552 5.99534 0.242269L6.76112 1.0189C7.07963 1.34192 7.07963 1.86426 6.76112 2.18385L3.49471 5.49656L6.76112 8.80928C7.07963 9.1323 7.07963 9.65464 6.76112 9.97423L5.99873 10.7577C5.68022 11.0808 5.16518 11.0808 4.85006 10.7577L0.241849 6.08419C-0.0800486 5.76117 -0.0800486 5.23883 0.238461 4.91581Z" />
  </SvgIcon>
);

export const CodeBranchIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox={"0 0 7 11"} {...props}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M8 3.16669C8 2.24585 7.25417 1.50002 6.33333 1.50002C5.4125 1.50002 4.66667 2.24585 4.66667 3.16669C4.66667 3.92502 5.17292 4.5646 5.86458 4.76669C5.85208 5.1021 5.77708 5.36044 5.63542 5.53544C5.31458 5.93544 4.60833 6.0021 3.86042 6.07085C3.27292 6.12502 2.66458 6.18335 2.16667 6.42294V3.42294C2.84375 3.21044 3.33333 2.57919 3.33333 1.83335C3.33333 0.91252 2.5875 0.166687 1.66667 0.166687C0.745833 0.166687 0 0.91252 0 1.83335C0 2.57919 0.489583 3.21044 1.16667 3.42294V7.57502C0.489583 7.7896 0 8.42085 0 9.16669C0 10.0875 0.745833 10.8334 1.66667 10.8334C2.5875 10.8334 3.33333 10.0875 3.33333 9.16669C3.33333 8.45835 2.89167 7.8521 2.26667 7.61252C2.33125 7.50419 2.42917 7.40835 2.57708 7.33335C2.91458 7.16252 3.41875 7.11669 3.95417 7.06669C4.83333 6.98544 5.82917 6.89169 6.41667 6.16252C6.70833 5.80002 6.85625 5.33335 6.86667 4.74794C7.525 4.52294 8 3.90002 8 3.16669ZM1.66667 1.50002C1.85 1.50002 2 1.65002 2 1.83335C2 2.01669 1.85 2.16669 1.66667 2.16669C1.48333 2.16669 1.33333 2.01669 1.33333 1.83335C1.33333 1.65002 1.48333 1.50002 1.66667 1.50002ZM1.66667 9.50002C1.48333 9.50002 1.33333 9.35002 1.33333 9.16669C1.33333 8.98335 1.48333 8.83335 1.66667 8.83335C1.85 8.83335 2 8.98335 2 9.16669C2 9.35002 1.85 9.50002 1.66667 9.50002ZM6.33333 2.83335C6.51667 2.83335 6.66667 2.98335 6.66667 3.16669C6.66667 3.35002 6.51667 3.50002 6.33333 3.50002C6.15 3.50002 6 3.35002 6 3.16669C6 2.98335 6.15 2.83335 6.33333 2.83335Z"
      fill="#989898"
    />
  </SvgIcon>
);

export const BitBucketIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox={"0 0 7 11"} {...props}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M0.260081 1.88914e-05C0.117197 -0.00176642 0.00160544 0.123205 1.53107e-09 0.282097C1.53107e-09 0.298165 0.00160544 0.314233 0.00321088 0.332086L1.0917 7.67684C1.11899 7.86251 1.26348 7.99819 1.43205 7.99998H6.65134C6.77817 8.00176 6.88734 7.9 6.90821 7.76075L7.9967 0.333871C8.01918 0.17855 7.92446 0.0321544 7.78478 0.00716014C7.77033 0.00537484 7.75589 0.00358952 7.73983 0.00358952L0.260081 1.88914e-05ZM4.8404 5.30773H3.17396L2.72283 2.6869H5.24337L4.8404 5.30773Z"
      fill="#989898"
    />
  </SvgIcon>
);

export const BetaIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox={"0 0 140 12"} {...props}>
    <rect width="24" height="12" rx="2" fill="white" fillOpacity="0.2" />
    <path
      opacity="0.6"
      d="M4.37926 8V3.63636H6.12642C6.44744 3.63636 6.7152 3.68395 6.92969 3.77912C7.14418 3.87429 7.3054 4.00639 7.41335 4.17543C7.52131 4.34304 7.57528 4.53622 7.57528 4.75497C7.57528 4.92543 7.54119 5.07528 7.47301 5.20455C7.40483 5.33239 7.31108 5.4375 7.19176 5.51989C7.07386 5.60085 6.93892 5.65838 6.78693 5.69247V5.73509C6.95313 5.74219 7.10866 5.78906 7.25355 5.87571C7.39986 5.96236 7.51847 6.08381 7.60938 6.24006C7.70028 6.39489 7.74574 6.57955 7.74574 6.79403C7.74574 7.02557 7.68821 7.23224 7.57315 7.41406C7.45952 7.59446 7.29119 7.73722 7.06818 7.84233C6.84517 7.94744 6.57031 8 6.24361 8H4.37926ZM5.30185 7.24574H6.05398C6.31108 7.24574 6.49858 7.19673 6.61648 7.09872C6.73438 6.99929 6.79332 6.86719 6.79332 6.70241C6.79332 6.58168 6.7642 6.47514 6.70597 6.38281C6.64773 6.29048 6.56463 6.21804 6.45668 6.16548C6.35014 6.11293 6.22301 6.08665 6.07528 6.08665H5.30185V7.24574ZM5.30185 5.46236H5.9858C6.11222 5.46236 6.22443 5.44034 6.32244 5.39631C6.42188 5.35085 6.5 5.28693 6.55682 5.20455C6.61506 5.12216 6.64418 5.02344 6.64418 4.90838C6.64418 4.75071 6.58807 4.62358 6.47585 4.52699C6.36506 4.4304 6.20739 4.3821 6.00284 4.3821H5.30185V5.46236ZM8.34606 8V3.63636H11.2864V4.39702H9.26864V5.43679H11.1351V6.19744H9.26864V7.23935H11.2949V8H8.34606ZM11.8537 4.39702V3.63636H15.4375V4.39702H14.1016V8H13.1896V4.39702H11.8537ZM16.2466 8H15.258L16.7644 3.63636H17.9533L19.4576 8H18.4689L17.3759 4.63352H17.3418L16.2466 8ZM16.1848 6.2848H18.5201V7.00497H16.1848V6.2848Z"
      fill="white"
    />
  </SvgIcon>
);

export const OSBLogo = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 140 20" {...props}>
    <g clipPath="url(#clip0_6402_10171)">
      <path
        d="M22.1425 15.1925C21.0195 15.1925 20.1157 14.8235 19.4312 14.0855C18.7574 13.3476 18.4205 12.3636 18.4205 11.1336L18.4365 7.97311C18.4365 6.87149 18.7788 5.95168 19.4633 5.2137C20.1478 4.47571 21.0569 4.10672 22.1906 4.10672C23.2922 4.10672 24.1799 4.47571 24.8538 5.2137C25.5276 5.95168 25.8591 6.87149 25.8484 7.97311C25.8484 8.27258 25.8538 9.32608 25.8645 11.1336C25.8645 12.2994 25.5329 13.2566 24.8698 14.0053C24.1853 14.7968 23.2762 15.1925 22.1425 15.1925ZM22.2066 5.82334C21.0515 5.82334 20.4686 6.73779 20.4579 8.56671V10.8609C20.4472 12.6042 21.0141 13.4759 22.1585 13.4759C22.8323 13.4759 23.3029 13.1925 23.5703 12.6256C23.7414 12.2299 23.827 11.6416 23.827 10.8609L23.843 8.69505C23.843 6.78057 23.2976 5.82334 22.2066 5.82334ZM30.0244 12.4973L29.2222 12.9304V13.4919C29.2116 14.2406 29.2329 14.7433 29.2864 15H27.2008C27.2436 14.5508 27.265 14.0481 27.265 13.4919V5.82334C27.265 5.07466 27.2436 4.56662 27.2008 4.29924H29.6073C30.8159 4.29924 31.7891 4.63614 32.5271 5.30996C33.2651 5.97307 33.6341 6.81801 33.6341 7.84477C33.6341 8.89292 33.2705 9.85016 32.5432 10.7165C31.9014 11.4652 31.0619 12.0588 30.0244 12.4973ZM29.6554 6.04794H29.2222V10.8448C29.8533 10.6095 30.3987 10.2405 30.8586 9.73786C31.3934 9.171 31.6608 8.5774 31.6608 7.95707C31.6608 7.35813 31.4522 6.88218 31.0351 6.52923C30.6608 6.20837 30.2009 6.04794 29.6554 6.04794ZM34.7195 15C34.7623 14.7326 34.7837 14.3262 34.7837 13.7807V5.69499C34.7837 4.95701 34.7623 4.49176 34.7195 4.29924H40.0138V6.09607C39.7891 6.06398 39.3934 6.04794 38.8266 6.04794H36.741V8.55067H38.2651C38.725 8.55067 39.0833 8.53462 39.3399 8.50254V10.2673C39.126 10.2352 38.8159 10.2192 38.4094 10.2192H36.741V13.2513H39.003C39.4522 13.2513 39.848 13.2353 40.1902 13.2032V15H34.7195ZM45.9866 15.016C46.04 14.3208 46.0668 13.7647 46.0668 13.3476C46.0561 13.0695 46.0561 12.8877 46.0668 12.8021L43.179 8.13354V13.2192C43.179 13.893 43.2004 14.492 43.2432 15.016H41.2057C41.2485 14.5241 41.2699 13.8716 41.2699 13.0588V5.18161L40.7886 4.29924H42.9223L46.0668 9.43304V6.04794C46.0668 5.41691 46.04 4.82331 45.9866 4.26715H48.008C47.9759 4.81262 47.9599 5.40621 47.9599 6.04794V13.123C47.9599 13.9893 47.9813 14.6203 48.024 15.016H45.9866ZM54.2317 15.1444C53.6221 15.1444 52.9376 15 52.1782 14.7112V12.6577C52.9804 13.0855 53.6649 13.2994 54.2317 13.2994C54.7344 13.2994 55.1622 13.2032 55.5152 13.0107C55.9537 12.7754 56.1729 12.4384 56.1729 11.9999C56.1729 11.6898 56.1462 11.4598 56.0927 11.3101C55.9965 11.0641 55.8039 10.8502 55.5152 10.6684C55.2264 10.4865 54.7023 10.1496 53.9429 9.65764C53.3012 9.24052 52.8413 8.81805 52.5632 8.39023C52.2958 7.96242 52.1622 7.44369 52.1622 6.83405C52.1622 5.06931 53.205 4.18694 55.2906 4.18694C56.0285 4.18694 56.7558 4.35272 57.4724 4.68427V6.54528C56.7986 6.11746 56.082 5.90355 55.3227 5.90355C54.5419 5.90355 54.1515 6.19233 54.1515 6.76988C54.1515 7.20839 54.4082 7.58808 54.9216 7.90894C55.4029 8.21911 55.8788 8.52393 56.3494 8.8234C57.0446 9.27261 57.5366 9.74855 57.8254 10.2512C58.0928 10.7111 58.2265 11.262 58.2265 11.9037C58.2265 13.0267 57.82 13.8716 57.0072 14.4385C56.312 14.9091 55.3868 15.1444 54.2317 15.1444ZM62.8143 15.1925C61.6913 15.1925 60.7875 14.8235 60.103 14.0855C59.4292 13.3476 59.0923 12.3636 59.0923 11.1336L59.1083 7.97311C59.1083 6.87149 59.4506 5.95168 60.1351 5.2137C60.8196 4.47571 61.7287 4.10672 62.8624 4.10672C63.964 4.10672 64.8518 4.47571 65.5256 5.2137C66.1994 5.95168 66.5309 6.87149 66.5202 7.97311C66.5202 8.27258 66.5256 9.32608 66.5363 11.1336C66.5363 12.2994 66.2047 13.2566 65.5416 14.0053C64.8571 14.7968 63.948 15.1925 62.8143 15.1925ZM62.8785 5.82334C61.7234 5.82334 61.1405 6.73779 61.1298 8.56671V10.8609C61.1191 12.6042 61.6859 13.4759 62.8303 13.4759C63.5041 13.4759 63.9747 13.1925 64.2421 12.6256C64.4132 12.2299 64.4988 11.6416 64.4988 10.8609L64.5149 8.69505C64.5149 6.78057 63.9694 5.82334 62.8785 5.82334ZM73.0546 5.29391C73.0546 4.89818 73.0225 4.56662 72.9583 4.29924H75.1562C75.1134 4.54523 75.0867 4.87679 75.076 5.29391V5.88751V11.1336C75.076 12.2887 74.7551 13.246 74.1134 14.0053C73.4289 14.7968 72.5144 15.1925 71.37 15.1925C70.2042 15.1925 69.2844 14.8021 68.6106 14.0214C67.9689 13.2727 67.648 12.3101 67.648 11.1336L67.632 5.29391C67.632 5.06931 67.6106 4.73775 67.5678 4.29924H69.7497C69.6962 4.57732 69.6695 4.98375 69.6695 5.51852V10.8609C69.6695 12.6042 70.2363 13.4759 71.37 13.4759C72.0545 13.4759 72.5251 13.1871 72.7818 12.6096C72.9636 12.2245 73.0546 11.6416 73.0546 10.8609V5.29391ZM79.3288 12.4973L78.5427 12.9304L78.5266 13.4919C78.5159 14.2406 78.5427 14.7433 78.6069 15H76.5052C76.548 14.5508 76.5694 14.0481 76.5694 13.4919V5.82334C76.5694 5.07466 76.548 4.56662 76.5052 4.29924H78.9277C80.1256 4.29924 81.0935 4.63614 81.8315 5.30996C82.5695 5.97307 82.9385 6.81801 82.9385 7.84477C82.9385 9.01057 82.4946 10.0534 81.6069 10.9732L82.5535 13.7968C82.6925 14.1925 82.8583 14.5936 83.0508 15H80.901L80.0828 12.1283C79.8475 12.2673 79.5962 12.3903 79.3288 12.4973ZM78.9598 6.04794H78.5266L78.5427 10.8448C79.163 10.6095 79.7085 10.2405 80.1791 9.73786C80.7032 9.171 80.9652 8.5774 80.9652 7.95707C80.9652 7.35813 80.7566 6.88218 80.3395 6.52923C79.9652 6.20837 79.5053 6.04794 78.9598 6.04794ZM87.8743 5.96772C87.2005 5.96772 86.655 6.3688 86.2379 7.17096C85.8742 7.85546 85.6924 8.59345 85.6924 9.38491C85.6924 11.9625 86.4197 13.2513 87.8743 13.2513C88.2165 13.2513 88.5106 13.2085 88.7566 13.123C88.8315 13.0909 89.0935 12.9625 89.5427 12.7379L89.5588 14.7754C88.7994 15.0107 88.1737 15.1283 87.6817 15.1283C84.9758 15.1283 83.6228 13.2139 83.6228 9.38491C83.6228 8.05868 83.9811 6.88218 84.6977 5.85542C85.4785 4.72171 86.4732 4.15485 87.6817 4.15485C88.27 4.15485 88.8903 4.27785 89.5427 4.52384V6.44902C88.9117 6.12815 88.3556 5.96772 87.8743 5.96772ZM90.7138 15C90.7566 14.7326 90.7779 14.3262 90.7779 13.7807V5.69499C90.7779 4.95701 90.7566 4.49176 90.7138 4.29924H96.008V6.09607C95.7834 6.06398 95.3877 6.04794 94.8208 6.04794H92.7352V8.55067H94.2593C94.7192 8.55067 95.0775 8.53462 95.3342 8.50254V10.2673C95.1203 10.2352 94.8101 10.2192 94.4037 10.2192H92.7352V13.2513H94.9973C95.4465 13.2513 95.8422 13.2353 96.1845 13.2032V15H90.7138ZM107.011 11.7272C107.011 12.4652 106.765 13.155 106.273 13.7968C105.652 14.5989 104.802 15 103.722 15H100.257C100.299 14.754 100.321 14.2513 100.321 13.4919V5.82334C100.321 5.01048 100.299 4.50245 100.257 4.29924H103.433C104.321 4.29924 105.048 4.52919 105.615 4.98909C106.214 5.48108 106.513 6.1442 106.513 6.97844C106.513 7.85546 106.176 8.53997 105.503 9.03196C106.508 9.42769 107.011 10.3261 107.011 11.7272ZM104.636 7.39556C104.636 6.49715 104.128 6.04794 103.112 6.04794H102.278V8.48649H102.984C103.529 8.48649 103.941 8.37954 104.219 8.16563C104.497 7.95172 104.636 7.69503 104.636 7.39556ZM105.021 11.7272C105.021 10.7218 104.385 10.2192 103.112 10.2192H102.278V13.2513H103.385C103.834 13.2513 104.219 13.1176 104.54 12.8502C104.861 12.5828 105.021 12.2085 105.021 11.7272ZM111.102 12.4973L110.316 12.9304L110.3 13.4919C110.289 14.2406 110.316 14.7433 110.38 15H108.278C108.321 14.5508 108.342 14.0481 108.342 13.4919V5.82334C108.342 5.07466 108.321 4.56662 108.278 4.29924H110.701C111.899 4.29924 112.866 4.63614 113.604 5.30996C114.342 5.97307 114.711 6.81801 114.711 7.84477C114.711 9.01057 114.268 10.0534 113.38 10.9732L114.326 13.7968C114.465 14.1925 114.631 14.5936 114.824 15H112.674L111.856 12.1283C111.62 12.2673 111.369 12.3903 111.102 12.4973ZM110.733 6.04794H110.3L110.316 10.8448C110.936 10.6095 111.481 10.2405 111.952 9.73786C112.476 9.171 112.738 8.5774 112.738 7.95707C112.738 7.35813 112.53 6.88218 112.112 6.52923C111.738 6.20837 111.278 6.04794 110.733 6.04794ZM115.267 15L118.091 4.29924H120.465L122.23 10.9571H123.064V12.6577H122.679L123.305 15H121.075C121.075 14.8289 121.011 14.4813 120.882 13.9572L120.562 12.6577H117.77L117.401 13.9572C117.251 14.5027 117.177 14.8503 117.177 15H115.267ZM118.235 10.9571H120.128L119.23 7.37952L118.235 10.9571ZM124.273 15C124.315 14.7219 124.337 14.2192 124.337 13.4919V5.80729C124.337 5.01583 124.315 4.51315 124.273 4.29924H126.455C126.412 4.54523 126.39 5.03722 126.39 5.77521V13.524C126.39 14.2513 126.412 14.7433 126.455 15H124.273ZM132.782 15.016C132.836 14.3208 132.863 13.7647 132.863 13.3476C132.852 13.0695 132.852 12.8877 132.863 12.8021L129.975 8.13354V13.2192C129.975 13.893 129.996 14.492 130.039 15.016H128.001C128.044 14.5241 128.066 13.8716 128.066 13.0588V5.18161L127.584 4.29924H129.718L132.863 9.43304V6.04794C132.863 5.41691 132.836 4.82331 132.782 4.26715H134.804C134.772 4.81262 134.756 5.40621 134.756 6.04794V13.123C134.756 13.9893 134.777 14.6203 134.82 15.016H132.782Z"
        fill="white"
      />
      <path
        d="M14.7281 14.2199C17.5757 10.3531 15.6218 5.54781 13.1458 4.72012C11.8995 4.24902 10.5261 4.93368 9.80566 5.29997C8.96803 5.72585 6.54372 5.65668 5.75384 5.4861C5.33685 5.01565 5.01867 4.50296 4.70364 5.41716C4.48231 6.41268 5.30858 6.11787 5.70028 5.95718C6.58214 6.03289 8.8123 5.68054 9.37568 6.36835C9.65266 6.7065 9.29547 8.04586 9.11488 8.53748C8.7153 9.61699 6.79189 9.4473 5.62877 9.84522C5.46314 9.904 5.50948 10.4023 5.77762 10.2797C7.31054 9.63168 8.5804 9.61959 9.5931 10.0068C11.6486 10.7928 13.3696 12.9504 13.0544 15.1759C13.0458 15.4778 13.3616 15.4649 13.4204 15.2739C13.9316 13.601 11.6045 10.3702 13.215 9.13954C16.2538 6.78652 15.7977 12.2099 14.3701 13.8776C14.2585 14.168 14.5538 14.4585 14.7281 14.2199Z"
        fill="#37ABC8"
      />
      <path
        d="M9.05818 2.80128C4.2712 2.41925 1.49677 6.7983 1.86831 9.26224C2.14808 10.7847 3.07973 11.0459 4.12148 11.7952C4.88432 12.344 5.86137 14.0815 6.0427 14.9537C5.86266 15.556 5.59465 16.0966 6.53761 15.8826C7.5003 15.546 6.81428 14.9991 6.47127 14.751C6.20915 13.9173 4.96844 12.4389 5.25605 11.5976C5.39745 11.184 6.72395 10.7816 7.23692 10.676C8.36493 10.4467 9.23443 12.1707 10.1856 12.9494C10.3229 13.0592 10.7219 12.7572 10.4764 12.5939C9.11777 11.6327 8.43823 10.5599 8.2336 9.49521C7.81824 7.33409 8.74482 4.73443 10.8023 3.82936C11.0634 3.67754 10.8859 3.41594 10.6926 3.46669C9.00154 3.91391 7.4823 7.59429 5.58768 6.87428C1.98639 5.53184 6.78632 2.95168 8.95599 3.28599C9.26159 3.22775 9.3528 2.82374 9.05818 2.80128Z"
        fill="#88AA00"
      />
      <path
        d="M2.58127 13.5659C4.56567 17.939 9.40321 18.1387 11.3789 16.6203C12.3564 15.939 12.3526 14.6965 12.5036 13.4221C12.6141 12.489 13.732 11.1465 14.2212 10.1621C14.8353 10.0278 15.5001 9.81429 14.7941 9.27919C14.0333 8.66205 13.9803 9.18578 13.8362 9.88533C13.3579 10.7046 12.6564 12.3694 11.7811 12.5253C11.3508 12.6019 10.3563 11.6363 10.0154 11.2386C9.26839 10.3629 10.3555 8.76713 10.5761 7.55777C10.6057 7.38453 10.1482 7.18169 10.1243 7.47555C9.94141 9.12974 9.33198 10.2439 8.4996 10.9386C6.81008 12.3488 4.08692 12.7973 2.29854 11.4356C2.03927 11.2808 1.89635 11.5627 2.03438 11.7073C3.24474 12.9701 7.20044 12.5166 7.48821 14.5229C8.05807 18.3238 3.81325 15.4807 3.05482 13.4206C2.85585 13.1814 2.45821 13.2973 2.58127 13.5659Z"
        fill="#EB517A"
      />
    </g>
    <defs>
      <clipPath id="clip0_6402_10171">
        <rect width="135.686" height="20.7559" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export const WorkspaceIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 28 28" {...props}>
    <rect width="28" height="28" rx="8" />
    <path
      d="M19.7723 11.7431L14.2879 8.08679C14.1007 7.9716 13.9009 7.97054 13.712 8.08679L8.22767 11.7431C8.08705 11.8368 8 12.0042 8 12.1716V15.8278C8 15.9953 8.08705 16.1627 8.22769 16.2564L13.7121 19.9132C13.8993 20.0284 14.099 20.0295 14.2879 19.9132L19.7723 16.2564C19.9129 16.1627 20 15.9953 20 15.8278V12.1716C20 12.0042 19.9129 11.8368 19.7723 11.7431ZM14.5156 9.47962L18.5536 12.1716L16.7522 13.377L14.5156 11.8837V9.47962ZM13.4844 9.47962V11.8837L11.2478 13.377L9.44642 12.1716L13.4844 9.47962ZM9.03125 13.1359L10.3237 13.9997L9.03125 14.8636V13.1359ZM13.4844 18.5199L9.44642 15.8279L11.2478 14.6225L13.4844 16.1158V18.5199ZM14 15.2185L12.1785 13.9997L14 12.781L15.8214 13.9997L14 15.2185ZM14.5156 18.5199V16.1158L16.7522 14.6225L18.5536 15.8279L14.5156 18.5199ZM18.9687 14.8636L17.6763 13.9997L18.9687 13.1359V14.8636Z"
      fill="white"
      fillOpacity="0.8"
    />
  </SvgIcon>
);

export const DataAnalystIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 28 28" {...props}>
    <rect width="28" height="28" rx="8" />
    <path
      d="M19.7188 18.5C19.8734 18.5 20 18.6687 20 18.875V19.625C20 19.8313 19.8734 20 19.7188 20H8.28125C8.12656 20 8 19.8313 8 19.625V8.375C8 8.16875 8.12656 8 8.28125 8H8.84375C8.99844 8 9.125 8.16875 9.125 8.375V18.5H19.7188ZM11.375 16.625V14.375C11.375 14.1687 11.2484 14 11.0938 14H10.5312C10.3766 14 10.25 14.1687 10.25 14.375V16.625C10.25 16.8313 10.3766 17 10.5312 17H11.0938C11.2484 17 11.375 16.8313 11.375 16.625ZM13.625 16.625V10.375C13.625 10.1688 13.4984 10 13.3438 10H12.7812C12.6266 10 12.5 10.1688 12.5 10.375V16.625C12.5 16.8313 12.6266 17 12.7812 17H13.3438C13.4984 17 13.625 16.8313 13.625 16.625ZM15.875 16.625V12.375C15.875 12.1687 15.7484 12 15.5938 12H15.0312C14.8766 12 14.75 12.1687 14.75 12.375V16.625C14.75 16.8313 14.8766 17 15.0312 17H15.5938C15.7484 17 15.875 16.8313 15.875 16.625ZM18.125 16.625V9.375C18.125 9.16875 17.9984 9 17.8438 9H17.2812C17.1266 9 17 9.16875 17 9.375V16.625C17 16.8313 17.1266 17 17.2812 17H17.8438C17.9984 17 18.125 16.8313 18.125 16.625Z"
      fill="white"
      fillOpacity="0.8"
    />
  </SvgIcon>
);

export const ComputationalModeling = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 28 28" {...props}>
    <rect width="28" height="28" rx="8" />
    <g clipPath="url(#clip0_6240_50875)">
      <path
        d="M9.6875 11.375C8.75705 11.375 8 10.618 8 9.6875C8 8.75705 8.75705 8 9.6875 8C10.618 8 11.375 8.75705 11.375 9.6875C11.375 10.618 10.618 11.375 9.6875 11.375ZM9.6875 8.9375C9.27396 8.9375 8.9375 9.27396 8.9375 9.6875C8.9375 10.101 9.27396 10.4375 9.6875 10.4375C10.101 10.4375 10.4375 10.101 10.4375 9.6875C10.4375 9.27396 10.101 8.9375 9.6875 8.9375ZM9.6875 20C8.75705 20 8 19.243 8 18.3125C8 17.382 8.75705 16.625 9.6875 16.625C10.618 16.625 11.375 17.382 11.375 18.3125C11.375 19.243 10.618 20 9.6875 20ZM9.6875 17.5625C9.27396 17.5625 8.9375 17.899 8.9375 18.3125C8.9375 18.726 9.27396 19.0625 9.6875 19.0625C10.101 19.0625 10.4375 18.726 10.4375 18.3125C10.4375 17.899 10.101 17.5625 9.6875 17.5625ZM9.6875 15.6875C8.75705 15.6875 8 14.9305 8 14C8 13.0695 8.75705 12.3125 9.6875 12.3125C10.618 12.3125 11.375 13.0695 11.375 14C11.375 14.9305 10.618 15.6875 9.6875 15.6875ZM9.6875 13.25C9.27396 13.25 8.9375 13.5865 8.9375 14C8.9375 14.4135 9.27396 14.75 9.6875 14.75C10.101 14.75 10.4375 14.4135 10.4375 14C10.4375 13.5865 10.101 13.25 9.6875 13.25ZM18.3125 11.375C17.382 11.375 16.625 10.618 16.625 9.6875C16.625 8.75705 17.382 8 18.3125 8C19.243 8 20 8.75705 20 9.6875C20 10.618 19.243 11.375 18.3125 11.375ZM18.3125 8.9375C17.899 8.9375 17.5625 9.27396 17.5625 9.6875C17.5625 10.101 17.899 10.4375 18.3125 10.4375C18.726 10.4375 19.0625 10.101 19.0625 9.6875C19.0625 9.27396 18.726 8.9375 18.3125 8.9375ZM18.3125 20C17.382 20 16.625 19.243 16.625 18.3125C16.625 17.382 17.382 16.625 18.3125 16.625C19.243 16.625 20 17.382 20 18.3125C20 19.243 19.243 20 18.3125 20ZM18.3125 17.5625C17.899 17.5625 17.5625 17.899 17.5625 18.3125C17.5625 18.726 17.899 19.0625 18.3125 19.0625C18.726 19.0625 19.0625 18.726 19.0625 18.3125C19.0625 17.899 18.726 17.5625 18.3125 17.5625ZM18.3125 15.6875C17.382 15.6875 16.625 14.9305 16.625 14C16.625 13.0695 17.382 12.3125 18.3125 12.3125C19.243 12.3125 20 13.0695 20 14C20 14.9305 19.243 15.6875 18.3125 15.6875ZM18.3125 13.25C17.899 13.25 17.5625 13.5865 17.5625 14C17.5625 14.4135 17.899 14.75 18.3125 14.75C18.726 14.75 19.0625 14.4135 19.0625 14C19.0625 13.5865 18.726 13.25 18.3125 13.25ZM14 11.375C13.0695 11.375 12.3125 10.618 12.3125 9.6875C12.3125 8.75705 13.0695 8 14 8C14.9305 8 15.6875 8.75705 15.6875 9.6875C15.6875 10.618 14.9305 11.375 14 11.375ZM14 8.9375C13.5865 8.9375 13.25 9.27396 13.25 9.6875C13.25 10.101 13.5865 10.4375 14 10.4375C14.4135 10.4375 14.75 10.101 14.75 9.6875C14.75 9.27396 14.4135 8.9375 14 8.9375ZM14 20C13.0695 20 12.3125 19.243 12.3125 18.3125C12.3125 17.382 13.0695 16.625 14 16.625C14.9305 16.625 15.6875 17.382 15.6875 18.3125C15.6875 19.243 14.9305 20 14 20ZM14 17.5625C13.5865 17.5625 13.25 17.899 13.25 18.3125C13.25 18.726 13.5865 19.0625 14 19.0625C14.4135 19.0625 14.75 18.726 14.75 18.3125C14.75 17.899 14.4135 17.5625 14 17.5625ZM14 15.6875C13.0695 15.6875 12.3125 14.9305 12.3125 14C12.3125 13.0695 13.0695 12.3125 14 12.3125C14.9305 12.3125 15.6875 13.0695 15.6875 14C15.6875 14.9305 14.9305 15.6875 14 15.6875ZM14 13.25C13.5865 13.25 13.25 13.5865 13.25 14C13.25 14.4135 13.5865 14.75 14 14.75C14.4135 14.75 14.75 14.4135 14.75 14C14.75 13.5865 14.4135 13.25 14 13.25Z"
        fill="white"
        fillOpacity="0.8"
      />
    </g>
    <defs>
      <clipPath id="clip0_6240_50875">
        <rect width="12" height="12" fill="white" transform="translate(8 8)" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export const WorkspaceFromRepository = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 28 28" {...props}>
    <rect width="28" height="28" rx="8" />
    <path
      d="M18 11H14L13 10H10C9.45 10 9.005 10.45 9.005 11L9 17C9 17.55 9.45 18 10 18H18C18.55 18 19 17.55 19 17V12C19 11.45 18.55 11 18 11ZM18 17H10V12H18V17Z"
      fill="white"
    />
  </SvgIcon>
);

export const RepositoriesCardIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 61 60" {...props}>
    <path
      d="M30.875 0C14.315 0 0.875 13.44 0.875 30C0.875 46.56 14.315 60 30.875 60C47.435 60 60.875 46.56 60.875 30C60.875 13.44 47.435 0 30.875 0ZM6.875 30C6.875 28.17 7.115 26.37 7.505 24.66L21.845 39V42C21.845 45.3 24.545 48 27.845 48V53.79C16.055 52.29 6.875 42.21 6.875 30ZM48.545 46.2C47.765 43.77 45.545 42 42.845 42H39.845V33C39.845 31.35 38.495 30 36.845 30H18.845V24H24.845C26.495 24 27.845 22.65 27.845 21V15H33.845C37.145 15 39.845 12.3 39.845 9V7.77C48.635 11.31 54.875 19.95 54.875 30C54.875 36.24 52.445 41.94 48.545 46.2Z"
      fillOpacity="0.8"
    />
  </SvgIcon>
);

export const ContextIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 10 11" {...props}>
    <path
      d="M5.90039 10.5H9.90039V7H8.40039V5H5.90039V4H7.40039V0.5H3.40039V4H4.90039V5H2.40039V7H0.900391V10.5H4.90039V7H3.40039V6H7.40039V7H5.90039V10.5ZM4.40039 3V1.5H6.40039V3H4.40039ZM3.90039 8V9.5H1.90039V8H3.90039ZM8.90039 8V9.5H6.90039V8H8.90039Z"
      fill="#989898"
    />
  </SvgIcon>
);