const icons = {
  browse: (
    <path d="M3 5L3.5 2H20.5L21 5H3ZM22 6H2L3 10H6.89979C7.7157 8.53408 9.6918 7.5 12 7.5C14.3082 7.5 16.2843 8.53408 17.1002 10H21L22 6ZM5 22L2 11H22L19 22H5ZM12 20.75C15.0376 20.75 17.5 18.8472 17.5 16.5C17.5 14.1528 15.0376 12.25 12 12.25C8.96243 12.25 6.5 14.1528 6.5 16.5C6.5 18.8472 8.96243 20.75 12 20.75ZM12 17.75C12.8284 17.75 13.5 17.1904 13.5 16.5C13.5 15.8096 12.8284 15.25 12 15.25C11.1716 15.25 10.5 15.8096 10.5 16.5C10.5 17.1904 11.1716 17.75 12 17.75Z" />
  ),
  follow: (
    <path d="M8 11.5C9.06087 11.5 10.0783 11.0786 10.8284 10.3284C11.5786 9.57828 12 8.56087 12 7.5C12 6.43913 11.5786 5.42172 10.8284 4.67157C10.0783 3.92143 9.06087 3.5 8 3.5C6.93913 3.5 5.92172 3.92143 5.17157 4.67157C4.42143 5.42172 4 6.43913 4 7.5C4 8.56087 4.42143 9.57828 5.17157 10.3284C5.92172 11.0786 6.93913 11.5 8 11.5ZM17 11.5C17.7956 11.5 18.5587 11.1839 19.1213 10.6213C19.6839 10.0587 20 9.29565 20 8.5C20 7.70435 19.6839 6.94129 19.1213 6.37868C18.5587 5.81607 17.7956 5.5 17 5.5C16.2044 5.5 15.4413 5.81607 14.8787 6.37868C14.3161 6.94129 14 7.70435 14 8.5C14 9.29565 14.3161 10.0587 14.8787 10.6213C15.4413 11.1839 16.2044 11.5 17 11.5ZM4.25 13.5C3.65326 13.5 3.08097 13.7371 2.65901 14.159C2.23705 14.581 2 15.1533 2 15.75V16C2 16 2 20.5 8 20.5C14 20.5 14 16 14 16V15.75C14 15.1533 13.7629 14.581 13.341 14.159C12.919 13.7371 12.3467 13.5 11.75 13.5H4.25ZM17 19C15.829 19 14.932 18.819 14.245 18.542C14.6448 17.8672 14.8958 17.1147 14.981 16.335C14.9907 16.2403 14.9971 16.1452 15 16.05V15.75C15.0013 14.9122 14.678 14.1065 14.098 13.502C14.132 13.5006 14.166 13.4999 14.2 13.5H19.8C20.3835 13.5 20.9431 13.7318 21.3556 14.1444C21.7682 14.5569 22 15.1165 22 15.7C22 15.7 22 19 17 19Z" />
  ),
  radio: (
    <>
      <path d="M12 14.8C13.578 14.8 14.8571 13.5464 14.8571 12C14.8571 10.4536 13.578 9.19999 12 9.19999C10.422 9.19999 9.14286 10.4536 9.14286 12C9.14286 13.5464 10.422 14.8 12 14.8Z" />
      <path d="M7 12C7 10.3856 7.82826 8.97214 9.06759 8.19225L8.03451 7.11986C7.75093 7.32462 7.48671 7.55396 7.24504 7.80511C6.1658 8.92563 5.57143 10.4154 5.57143 12C5.57143 13.5846 6.1658 15.0743 7.24509 16.1948C7.48675 16.446 7.75097 16.6753 8.03455 16.8801L9.06763 15.8077C7.82826 15.0278 7 13.6143 7 12Z" />
      <path d="M17 12C17 13.6143 16.1717 15.0278 14.9324 15.8077L15.9655 16.8801C16.2491 16.6753 16.5133 16.446 16.755 16.1948C17.8342 15.0743 18.4286 13.5846 18.4286 12C18.4286 10.4154 17.8342 8.92563 16.7549 7.80515C16.5132 7.55401 16.249 7.32467 15.9654 7.1199L14.9324 8.1923C16.1717 8.97214 17 10.3856 17 12Z" />
      <path d="M3.42857 12C3.42857 9.56845 4.55585 7.41031 6.29746 6.058L5.27826 5C5.0082 5.22074 4.75183 5.45709 4.51054 5.70779C3.72384 6.52455 3.10598 7.47602 2.6742 8.53582C2.22683 9.63385 2 10.7993 2 12C2 13.2006 2.22683 14.3661 2.6742 15.4641C3.10598 16.524 3.72384 17.4754 4.51054 18.2922C4.75186 18.5429 5.00822 18.7792 5.27826 19L6.29741 17.942C4.55585 16.5896 3.42857 14.4315 3.42857 12Z" />
      <path d="M20.5714 12C20.5714 14.4315 19.4442 16.5896 17.7026 17.942L18.7217 18.9853C18.9896 18.7665 19.2458 18.5451 19.4895 18.2922C20.2762 17.4754 20.894 16.524 21.3258 15.4641C21.7731 14.3661 22 13.2006 22 12C22 10.7993 21.7731 9.63385 21.3258 8.53582C20.894 7.47598 20.2762 6.52455 19.4895 5.70779C19.2482 5.45706 18.9918 5.22071 18.7217 5L17.7025 6.058C19.4442 7.41031 20.5714 9.56845 20.5714 12Z" />
    </>
  ),
  discover: (
    <path d="M11.0909 3.86818C9.55953 4.03932 8.1076 4.63938 6.90222 5.59931C5.69683 6.55923 4.78699 7.83999 4.2774 9.2942C3.76781 10.7484 3.67919 12.317 4.02173 13.8193C4.36428 15.3217 5.12407 16.6968 6.21365 17.7863C7.30324 18.8759 8.67834 19.6357 10.1807 19.9783C11.683 20.3208 13.2516 20.2322 14.7058 19.7226C16.16 19.213 17.4408 18.3032 18.4007 17.0978C19.3606 15.8924 19.9607 14.4405 20.1318 12.9091H11.0909V3.86818ZM12.9091 3.86818V11.0909H20.1318C19.9251 9.24649 19.0977 7.52708 17.7853 6.21471C16.4729 4.90233 14.7535 4.07492 12.9091 3.86818ZM2 12C2 6.47727 6.47727 2 12 2C17.5227 2 22 6.47727 22 12C22 17.5227 17.5227 22 12 22C6.47727 22 2 17.5227 2 12Z" />
  ),
  inbox: (
    <path d="M5.83 4.606C5.99591 4.27399 6.25093 3.9947 6.56652 3.79937C6.88212 3.60404 7.24585 3.50038 7.617 3.5H16.381C16.7525 3.50001 17.1166 3.60349 17.4326 3.79884C17.7486 3.99419 18.0039 4.27369 18.17 4.606L21.682 11.631C21.8905 12.047 21.9993 12.5057 22 12.971V18.5C22 19.0304 21.7893 19.5391 21.4142 19.9142C21.0391 20.2893 20.5304 20.5 20 20.5H4C3.46957 20.5 2.96086 20.2893 2.58579 19.9142C2.21071 19.5391 2 19.0304 2 18.5V12.972C2.00019 12.5065 2.10872 12.0473 2.317 11.631L5.83 4.606ZM16.381 5.5H7.618L4.12 12.5H7.5C7.89782 12.5 8.27936 12.658 8.56066 12.9393C8.84196 13.2206 9 13.6022 9 14V15C9 15.1326 9.05268 15.2598 9.14645 15.3536C9.24021 15.4473 9.36739 15.5 9.5 15.5H14.5C14.6326 15.5 14.7598 15.4473 14.8536 15.3536C14.9473 15.2598 15 15.1326 15 15V14C15 13.6022 15.158 13.2206 15.4393 12.9393C15.7206 12.658 16.1022 12.5 16.5 12.5H19.88L16.381 5.5Z" />
  ),
  "top-list": (
    <path d="M5.99045 12.9175V3H4.35982L2 4.71459V6.29057L4.27788 4.65499H4.36121V12.9175H5.99045ZM9.34203 9.30166V9.21434C9.34203 8.35774 9.95317 7.594 11.0032 7.594C11.9421 7.594 12.6338 8.20388 12.6338 9.12702C12.6338 9.99193 12.0505 10.6531 11.513 11.2422L7.81975 15.3256V16.3569H14.4589V14.9846H10.1157V14.889L12.57 12.1362C13.4728 11.1327 14.2881 10.2899 14.2881 8.98979C14.2867 7.41935 13.0047 6.24257 11.0393 6.24257C8.85451 6.24257 7.76141 7.71736 7.76141 9.22266V9.30166H9.34203ZM17.341 16.3511H18.4328C19.5759 16.3511 20.3412 17.0178 20.3481 17.9853C20.362 18.9652 19.5842 19.6707 18.3744 19.6624C17.3049 19.6555 16.5327 19.0817 16.4591 18.3415H14.9382C14.9965 19.801 16.241 21 18.3605 21C20.4134 21 22.0301 19.8371 21.9996 18.0282C21.9718 16.4439 20.719 15.7398 19.8453 15.6525V15.5651C20.5884 15.4404 21.7162 14.6503 21.6871 13.2393C21.6509 11.7797 20.3912 10.6681 18.4105 10.682C16.3271 10.6889 15.1923 11.9017 15.1493 13.3128H16.6993C16.7438 12.6225 17.391 12.0043 18.3744 12.0043C19.3508 12.0043 20.0495 12.6072 20.0495 13.4874C20.0564 14.3745 19.3495 15.0204 18.3828 15.0204H17.341V16.3511Z" />
  ),
  devices: (
    <path d="M21.1667 11.208L17 11.2C16.5417 11.2 16.1667 11.56 16.1667 12V19.2C16.1667 19.64 16.5417 20 17 20H21.1667C21.625 20 22 19.64 22 19.2V12C22 11.56 21.625 11.208 21.1667 11.208ZM21.1667 18.4H17V12.8H21.1667V18.4ZM18.6667 4H3.66667C2.74167 4 2 4.712 2 5.6V15.2C2 15.6243 2.17559 16.0313 2.48816 16.3314C2.80072 16.6314 3.22464 16.8 3.66667 16.8H9.5V18.4H7.83333V20H14.5V18.4H12.8333V16.8H14.5V15.2H3.66667V5.6H18.6667V9.6H20.3333V5.6C20.3333 5.17565 20.1577 4.76869 19.8452 4.46863C19.5326 4.16857 19.1087 4 18.6667 4Z" />
  ),
  "musical-note": (
    <path d="M19.7243 2.14265C19.81 2.20874 19.8795 2.29424 19.9274 2.39242C19.9752 2.4906 20.0001 2.59877 20 2.70843V15.9821C19.9999 16.5978 19.8033 17.1967 19.44 17.6882C19.0767 18.1797 18.5665 18.537 17.9865 18.7061L16.7651 19.0622C16.4654 19.154 16.1509 19.1842 15.8397 19.1509C15.5286 19.1176 15.227 19.0215 14.9525 18.8683C14.678 18.7151 14.4361 18.5078 14.2407 18.2583C14.0454 18.0089 13.9005 17.7223 13.8145 17.4152C13.7286 17.1082 13.7032 16.7868 13.7399 16.4696C13.7766 16.1525 13.8747 15.8459 14.0284 15.5678C14.1821 15.2896 14.3884 15.0454 14.6354 14.8493C14.8823 14.6532 15.1649 14.5092 15.4668 14.4255L17.6053 13.8021C17.8952 13.7175 18.1504 13.5388 18.332 13.2931C18.5137 13.0473 18.6119 12.7479 18.612 12.44V7.18933L10.2841 9.6187V18.8157C10.284 19.4314 10.0874 20.0303 9.72409 20.5218C9.36079 21.0133 8.85056 21.3706 8.27058 21.5398L7.04915 21.8958C6.74913 21.9889 6.43396 22.0201 6.12202 21.9875C5.81008 21.9549 5.50761 21.8593 5.23225 21.7062C4.95689 21.5531 4.71415 21.3455 4.51818 21.0956C4.32221 20.8458 4.17694 20.5586 4.09082 20.2508C4.00471 19.943 3.97949 19.6208 4.01662 19.303C4.05376 18.9852 4.15251 18.6781 4.30712 18.3996C4.46172 18.1211 4.66909 17.8769 4.91714 17.6811C5.16518 17.4853 5.44893 17.3418 5.75184 17.2591L7.88935 16.6357C8.17934 16.5511 8.43445 16.3725 8.6161 16.1267C8.79775 15.881 8.89604 15.5815 8.8961 15.2737V5.54206C8.89613 5.38813 8.94528 5.2384 9.0361 5.11553C9.12692 4.99265 9.25448 4.90332 9.39948 4.86104L19.1154 2.02742C19.2187 1.9972 19.3275 1.99187 19.4331 2.01187C19.5388 2.03187 19.6384 2.07664 19.7243 2.14265Z" />
  ),
  album: (
    <path d="M2 2H22V22H2V2ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
  ),
  "album-alt": (
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
  ),
  microphone: (
    <path d="M8.73333 2C9.72347 2 10.6731 2.42143 11.3732 3.17157C12.0733 3.92172 12.4667 4.93913 12.4667 6H5C5 4.93913 5.39333 3.92172 6.09347 3.17157C6.7936 2.42143 7.74319 2 8.73333 2ZM11.384 8.82L10.6 17H9.66667V18C9.66667 18.5304 9.86333 19.0391 10.2134 19.4142C10.5635 19.7893 11.0383 20 11.5333 20C12.0284 20 12.5032 19.7893 12.8533 19.4142C13.2033 19.0391 13.4 18.5304 13.4 18V13C13.4 11.9391 13.7933 10.9217 14.4935 10.1716C15.1936 9.42143 16.1432 9 17.1333 9H19L18.0667 10L19 11H17.1333C16.6383 11 16.1635 11.2107 15.8134 11.5858C15.4633 11.9609 15.2667 12.4696 15.2667 13V18C15.2667 19.0609 14.8733 20.0783 14.1732 20.8284C13.4731 21.5786 12.5235 22 11.5333 22C10.5432 22 9.5936 21.5786 8.89347 20.8284C8.19333 20.0783 7.8 19.0609 7.8 18V17H6.86667L6.08267 8.82C5.62533 8.32 5.28933 7.7 5.12133 7H12.3453C12.1773 7.7 11.8413 8.32 11.384 8.82ZM8.73333 10C8.4858 10 8.2484 10.1054 8.07337 10.2929C7.89833 10.4804 7.8 10.7348 7.8 11C7.8 11.2652 7.89833 11.5196 8.07337 11.7071C8.2484 11.8946 8.4858 12 8.73333 12C8.98087 12 9.21827 11.8946 9.3933 11.7071C9.56833 11.5196 9.66667 11.2652 9.66667 11C9.66667 10.7348 9.56833 10.4804 9.3933 10.2929C9.21827 10.1054 8.98087 10 8.73333 10Z" />
  ),
  "file-music": (
    <path d="M14.125 2H5.625C5.06141 2 4.52091 2.21071 4.1224 2.58579C3.72388 2.96086 3.5 3.46957 3.5 4V20C3.5 20.5304 3.72388 21.0391 4.1224 21.4142C4.52091 21.7893 5.06141 22 5.625 22H18.375C18.9386 22 19.4791 21.7893 19.8776 21.4142C20.2761 21.0391 20.5 20.5304 20.5 20V8L14.125 2ZM13.0625 13H10.9375V18C10.9375 18.5304 10.7136 19.0391 10.3151 19.4142C9.91659 19.7893 9.37609 20 8.8125 20C8.24891 20 7.70841 19.7893 7.3099 19.4142C6.91138 19.0391 6.6875 18.5304 6.6875 18C6.6875 17.4696 6.91138 16.9609 7.3099 16.5858C7.70841 16.2107 8.24891 16 8.8125 16C9.2375 16 9.55625 16.1 9.875 16.3V11H13.0625V13ZM13.0625 9V3.5L18.9062 9H13.0625Z" />
  ),
  star: <path d="M12 2L14.3607 9.63932H22L15.8197 14.3607L18.1803 22L12 17.2786L5.81966 22L8.18034 14.3607L2 9.63932H9.63932L12 2Z" />,
  "chevron-left": <path d="M15.1911 22L5 12L15.1911 2L17 3.775L8.61783 12L17 20.225L15.1911 22Z" />,
  "chevron-right": <path d="M8.80892 22L7 20.225L15.3822 12L7 3.775L8.80892 2L19 12L8.80892 22Z" />,
  search: (
    <path d="M21.6707 20.0995L17.2786 15.7057C18.5955 13.9897 19.2103 11.8371 18.9983 9.68447C18.7864 7.53185 17.7635 5.54046 16.1372 4.11425C14.5109 2.68804 12.403 1.93381 10.241 2.00456C8.07902 2.07532 6.02492 2.96575 4.49536 4.49524C2.9658 6.02473 2.07532 8.07874 2.00456 10.2406C1.93381 12.4025 2.68807 14.5103 4.11435 16.1365C5.54062 17.7628 7.53211 18.7856 9.68483 18.9976C11.8375 19.2095 13.9903 18.5947 15.7064 17.2779L20.1021 21.6744C20.2054 21.7776 20.3279 21.8595 20.4628 21.9154C20.5977 21.9712 20.7423 22 20.8883 22C21.0343 22 21.1788 21.9712 21.3137 21.9154C21.4486 21.8595 21.5711 21.7776 21.6744 21.6744C21.7776 21.5712 21.8595 21.4486 21.9154 21.3137C21.9712 21.1789 22 21.0343 22 20.8883C22 20.7423 21.9712 20.5978 21.9154 20.4629C21.8595 20.328 21.7776 20.2055 21.6744 20.1022L21.6707 20.0995ZM4.23829 10.5268C4.23829 9.28306 4.60713 8.06721 5.29816 7.03305C5.9892 5.99888 6.9714 5.19285 8.12055 4.71688C9.26971 4.2409 10.5342 4.11637 11.7541 4.35902C12.9741 4.60167 14.0947 5.2006 14.9742 6.08009C15.8537 6.95957 16.4527 8.0801 16.6953 9.29998C16.938 10.5199 16.8134 11.7843 16.3375 12.9334C15.8615 14.0825 15.0554 15.0647 14.0212 15.7557C12.987 16.4467 11.7711 16.8155 10.5272 16.8155C8.85982 16.8138 7.2612 16.1507 6.08217 14.9717C4.90313 13.7927 4.24 12.1942 4.23829 10.5268Z" />
  ),
  "notification-bell": (
    <>
      <path d="M18.4861 8.37679V9.12427C18.4861 12.7418 18.5924 12.5853 19.0267 13.3317L20.6483 15.1013C21.6197 16.7725 20.4454 17.4166 18.7552 17.9443C14.3386 19.3267 9.66138 19.3267 5.2448 17.9443C3.55456 17.4166 2.38026 16.7725 3.35174 15.1013L4.97329 13.3317C5.40914 12.5793 5.51381 12.7418 5.51481 9.12427V8.37679C5.51481 4.27201 8.41869 2 12 2C15.5813 2 18.4861 4.27201 18.4861 8.37679Z" />
      <path d="M14.5 20C12.8113 20.1766 11.1888 20.1793 9.5 20C9.5 20 10.2819 22 12 22C13.7181 22 14.5 20 14.5 20Z" />
    </>
  ),
  previous: <path d="M5 19V5H7.625V19H5ZM19 19L7.625 12L19 5V19Z" />,
  next: <path d="M16.2 19V5H19V19H16.2ZM5 19V5L16.2 12L5 19Z" />,
  play: <path d="M7 20V4L19 12L7 20Z" />,
  "play-alt": <path d="M2 20V4L14 12L2 20Z" />,
  queue: (
    <path d="M3 6.66667C3 5.95942 3.28095 5.28115 3.78105 4.78105C4.28115 4.28095 4.95942 4 5.66667 4H18.3333C19.0406 4 19.7189 4.28095 20.219 4.78105C20.719 5.28115 21 5.95942 21 6.66667C21 7.37391 20.719 8.05219 20.219 8.55229C19.7189 9.05238 19.0406 9.33333 18.3333 9.33333H5.66667C4.95942 9.33333 4.28115 9.05238 3.78105 8.55229C3.28095 8.05219 3 7.37391 3 6.66667ZM3 13.6667C3 13.4015 3.10536 13.1471 3.29289 12.9596C3.48043 12.772 3.73478 12.6667 4 12.6667H20C20.2652 12.6667 20.5196 12.772 20.7071 12.9596C20.8946 13.1471 21 13.4015 21 13.6667C21 13.9319 20.8946 14.1862 20.7071 14.3738C20.5196 14.5613 20.2652 14.6667 20 14.6667H4C3.73478 14.6667 3.48043 14.5613 3.29289 14.3738C3.10536 14.1862 3 13.9319 3 13.6667ZM4 18C3.73478 18 3.48043 18.1054 3.29289 18.2929C3.10536 18.4804 3 18.7348 3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20H20C20.2652 20 20.5196 19.8946 20.7071 19.7071C20.8946 19.5196 21 19.2652 21 19C21 18.7348 20.8946 18.4804 20.7071 18.2929C20.5196 18.1054 20.2652 18 20 18H4Z" />
  ),
  shuffle: (
    <path d="M19.7072 3.81115C19.5667 3.66194 19.3876 3.56055 19.1928 3.5199C18.9979 3.47925 18.796 3.50119 18.6129 3.58291C18.4298 3.66463 18.2737 3.80244 18.1646 3.97877C18.0554 4.1551 17.9982 4.36196 18.0002 4.57298L18.0102 5.62381H16.2652C15.4016 5.62377 14.5527 5.86137 13.8012 6.31347C13.0498 6.76558 12.4213 7.41677 11.9771 8.20362L8.30707 14.701C8.04084 15.173 7.66412 15.5638 7.21357 15.8353C6.76302 16.1068 6.25399 16.2497 5.73604 16.2501H3.00001C2.73479 16.2501 2.48043 16.3621 2.2929 16.5613C2.10536 16.7606 2 17.0309 2 17.3127C2 17.5945 2.10536 17.8647 2.2929 18.064C2.48043 18.2632 2.73479 18.3752 3.00001 18.3752H5.73504C6.59852 18.3753 7.44732 18.1379 8.19878 17.686C8.95023 17.2341 9.57874 16.5831 10.0231 15.7964L13.6931 9.29802C13.9595 8.82615 14.3363 8.43557 14.7868 8.16429C15.2373 7.893 15.7463 7.75025 16.2642 7.74993H18.0312L18.0392 8.51494C17.9771 8.74138 17.9877 8.98332 18.0693 9.20266C18.1508 9.422 18.2988 9.60626 18.4898 9.72642C18.6808 9.84657 18.904 9.8958 19.1242 9.86633C19.3444 9.83686 19.5492 9.73038 19.7062 9.56366L19.7482 9.51903L21.7062 7.43861C21.8937 7.23935 21.999 6.96914 21.999 6.6874C21.999 6.40566 21.8937 6.13545 21.7062 5.9362L19.7072 3.81115ZM3.00001 5.62488C2.73479 5.62488 2.48043 5.73682 2.2929 5.93608C2.10536 6.13534 2 6.4056 2 6.6874C2 6.9692 2.10536 7.23946 2.2929 7.43872C2.48043 7.63798 2.73479 7.74993 3.00001 7.74993H5.73504C6.13679 7.74981 6.53447 7.83542 6.90448 8.0017C7.2745 8.16797 7.60931 8.41152 7.88906 8.71789C7.97894 8.82428 8.0881 8.91032 8.21 8.97083C8.33191 9.03135 8.46406 9.0651 8.59853 9.07007C8.733 9.07504 8.86704 9.05112 8.99261 8.99975C9.11817 8.94838 9.23269 8.87062 9.32931 8.77111C9.42592 8.6716 9.50264 8.5524 9.55488 8.42065C9.60711 8.28889 9.63378 8.14729 9.63329 8.00433C9.6328 7.86136 9.60517 7.71997 9.55204 7.58862C9.4989 7.45728 9.42137 7.33867 9.32408 7.23991C8.85809 6.72911 8.30029 6.32295 7.68377 6.04552C7.06725 5.76809 6.40457 5.62505 5.73504 5.62488H3.00001ZM21.7072 16.5614L19.7072 14.4364C19.5673 14.2878 19.3892 14.1867 19.1952 14.1457C19.0013 14.1047 18.8002 14.1258 18.6175 14.2062C18.4348 14.2866 18.2787 14.4227 18.1688 14.5974C18.0589 14.7721 18.0002 14.9775 18.0002 15.1876V16.2501H16.2652C15.8634 16.2502 15.4657 16.1646 15.0957 15.9984C14.7257 15.8321 14.3909 15.5885 14.1111 15.2822C13.9258 15.0829 13.6739 14.9695 13.4102 14.9666C13.1466 14.9637 12.8926 15.0716 12.7034 15.2667C12.5142 15.4618 12.4052 15.7284 12.4001 16.0085C12.395 16.2886 12.4942 16.5595 12.6761 16.7623C13.1423 17.2727 13.7002 17.6785 14.3167 17.9555C14.9332 18.2326 15.5958 18.3753 16.2652 18.3752H18.0002V19.4377C18.0002 19.6478 18.0589 19.8532 18.1688 20.0279C18.2787 20.2026 18.4348 20.3387 18.6175 20.4191C18.8002 20.4995 19.0013 20.5206 19.1952 20.4796C19.3892 20.4386 19.5673 20.3375 19.7072 20.1889L21.7072 18.0639C21.8947 17.8646 22 17.5944 22 17.3127C22 17.0309 21.8947 16.7607 21.7072 16.5614Z" />
  ),
  repeat: (
    <path d="M18 4.5623C18 4.35219 18.0587 4.1468 18.1686 3.97211C18.2785 3.79742 18.4346 3.66127 18.6173 3.58087C18.8 3.50047 19.0011 3.47943 19.195 3.5204C19.389 3.56138 19.5671 3.66254 19.707 3.81109L21.707 5.93615C21.8945 6.1354 21.9998 6.40561 21.9998 6.68736C21.9998 6.9691 21.8945 7.23931 21.707 7.43857L19.707 9.56362C19.5671 9.71217 19.389 9.81333 19.195 9.85431C19.0011 9.89529 18.8 9.87425 18.6173 9.79385C18.4346 9.71345 18.2785 9.57729 18.1686 9.4026C18.0587 9.22791 18 9.02253 18 8.81241V7.74989H7C6.20435 7.74989 5.44129 8.08572 4.87868 8.68351C4.31607 9.2813 4 10.0921 4 10.9375C4 11.2193 3.89464 11.4895 3.70711 11.6888C3.51957 11.8881 3.26522 12 3 12C2.73478 12 2.48043 11.8881 2.29289 11.6888C2.10536 11.4895 2 11.2193 2 10.9375C2 9.52847 2.52678 8.17718 3.46447 7.18087C4.40215 6.18455 5.67392 5.62483 7 5.62483H18V4.5623ZM6 19.4377C5.99996 19.6478 5.94129 19.8532 5.8314 20.0279C5.72152 20.2026 5.56535 20.3387 5.38265 20.4191C5.19995 20.4995 4.99892 20.5206 4.80497 20.4796C4.61102 20.4386 4.43285 20.3375 4.293 20.1889L2.293 18.0638C2.10553 17.8646 2.00021 17.5944 2.00021 17.3126C2.00021 17.0309 2.10553 16.7607 2.293 16.5614L4.293 14.4364C4.43285 14.2878 4.61102 14.1867 4.80497 14.1457C4.99892 14.1047 5.19995 14.1257 5.38265 14.2062C5.56535 14.2866 5.72152 14.4227 5.8314 14.5974C5.94129 14.7721 5.99996 14.9775 6 15.1876V16.2501H17C17.7956 16.2501 18.5587 15.9143 19.1213 15.3165C19.6839 14.7187 20 13.9079 20 13.0625C20 12.7807 20.1054 12.5105 20.2929 12.3112C20.4804 12.1119 20.7348 12 21 12C21.2652 12 21.5196 12.1119 21.7071 12.3112C21.8946 12.5105 22 12.7807 22 13.0625C22 14.4712 21.4735 15.8221 20.5362 16.8184C19.599 17.8146 18.3277 18.3746 17.002 18.3752H6V19.4377Z" />
  ),
  volume: (
    <>
      <path d="M18.1769 21C19.3908 19.8196 20.3536 18.4168 21.0097 16.8723C21.6658 15.3277 22.0023 13.6719 22 12C22.0023 10.3281 21.6658 8.6723 21.0097 7.12774C20.3536 5.58318 19.3908 4.18038 18.1769 3L17.0898 4.05874C18.1605 5.10058 19.0097 6.33843 19.5885 7.70122C20.1674 9.064 20.4646 10.5249 20.4631 12C20.4631 15.1013 19.1733 17.9092 17.0898 19.9413L18.1769 21Z" />
      <path d="M16.0043 18.8825C16.9324 17.9797 17.6684 16.9069 18.1701 15.7258C18.6718 14.5446 18.9293 13.2785 18.9277 12C18.9293 10.7215 18.6718 9.45535 18.1701 8.27422C17.6684 7.09309 16.9324 6.02029 16.0043 5.11747L14.9188 6.17621C15.7043 6.94 16.3272 7.84775 16.7517 8.84722C17.1762 9.84669 17.3939 10.9182 17.3923 12C17.3943 13.082 17.177 14.1537 16.7527 15.1534C16.3285 16.1531 15.7057 17.0612 14.9203 17.8253L16.0043 18.8825Z" />
      <path d="M13.8332 16.7651C14.4748 16.1393 14.9838 15.3964 15.331 14.5788C15.6782 13.7612 15.8569 12.8849 15.8569 12C15.8569 11.115 15.6782 10.2388 15.331 9.42117C14.9838 8.60358 14.4748 7.8607 13.8332 7.23494L12.7477 8.29367C13.2467 8.78041 13.6425 9.35824 13.9126 9.99417C14.1826 10.6301 14.3216 11.3117 14.3215 12C14.3216 12.6883 14.1826 13.3699 13.9126 14.0058C13.6425 14.6418 13.2467 15.2196 12.7477 15.7063L13.8332 16.7651ZM10.7778 5.3361C10.9079 5.39721 11.0176 5.49286 11.0945 5.61205C11.1714 5.73125 11.2122 5.86917 11.2123 6.00998V17.99C11.2121 18.1309 11.1712 18.2689 11.0942 18.3881C11.0172 18.5073 10.9072 18.6029 10.777 18.6639C10.6468 18.7249 10.5016 18.7488 10.358 18.7329C10.2145 18.717 10.0785 18.662 9.9656 18.574L6.33748 15.7438H2.76769C2.56409 15.7438 2.36882 15.6649 2.22485 15.5245C2.08088 15.384 2 15.1936 2 14.995V9.00499C2 8.80641 2.08088 8.61596 2.22485 8.47554C2.36882 8.33512 2.56409 8.25624 2.76769 8.25624H6.33748L9.9656 5.42595C10.0786 5.33788 10.2147 5.28272 10.3584 5.26683C10.5021 5.25093 10.6475 5.27494 10.7778 5.3361Z" />
    </>
  ),
  add: <path d="M10.8571 13.1429H4V10.8571H10.8571V4H13.1429V10.8571H20V13.1429H13.1429V20H10.8571V13.1429Z" />,
  cancel: <path d="M5.6 20L4 18.4L10.4 12L4 5.6L5.6 4L12 10.4L18.4 4L20 5.6L13.6 12L20 18.4L18.4 20L12 13.6L5.6 20Z" />,
  user: (
    <path d="M10.3481 11.6572C10.5581 11.8971 10.7106 12.1777 10.7947 12.4796C10.8788 12.7814 10.8927 13.0971 10.8352 13.4045C10.7778 13.712 10.6505 14.0037 10.4622 14.2594C10.2739 14.5151 10.0292 14.7285 9.74516 14.8846L6.14984 16.8608C5.7393 17.0863 5.39838 17.4108 5.1614 17.8017C4.92442 18.1925 4.79974 18.6359 4.79991 19.0872V19.286H19.2001V19.0872C19.2001 18.6359 19.0753 18.1926 18.8384 17.8018C18.6014 17.411 18.2606 17.0864 17.8502 16.8608L14.2548 14.8846C13.9708 14.7285 13.7261 14.5151 13.5378 14.2594C13.3495 14.0037 13.2222 13.712 13.1648 13.4045C13.1073 13.0971 13.1212 12.7814 13.2053 12.4796C13.2894 12.1777 13.4419 11.8971 13.6519 11.6572L14.1207 11.1208L14.1225 11.1191C14.8425 10.3006 15.2952 9.41624 15.36 8.3853C15.3969 7.78028 15.2808 7.15725 15.1917 6.9053C15.0476 6.48248 14.8122 6.09307 14.5005 5.7621C14.1829 5.43173 13.7966 5.16791 13.3661 4.98742C12.9356 4.80693 12.4704 4.71373 12 4.71373C11.5296 4.71373 11.0644 4.80693 10.6339 4.98742C10.2034 5.16791 9.81709 5.43173 9.49948 5.7621C9.19349 6.07918 8.9658 6.46482 8.80831 6.9053C8.71831 7.15725 8.60312 7.78028 8.64002 8.3853C8.70482 9.41624 9.15749 10.3006 9.87746 11.1191L9.87926 11.1208L10.3481 11.6572ZM15.5022 12.2203L15.0342 12.755C14.9922 12.803 14.9618 12.8591 14.945 12.9195C14.9282 12.9798 14.9254 13.0429 14.9369 13.1044C14.9484 13.1659 14.9738 13.2242 15.0115 13.2753C15.0491 13.3264 15.098 13.3691 15.1548 13.4003L18.7501 15.3765C19.4341 15.7526 20.0022 16.2935 20.3971 16.9448C20.7921 17.5962 21 18.3351 21 19.0872V21H3V19.0864C3.00002 18.3342 3.20795 17.5954 3.60288 16.944C3.99782 16.2926 4.56585 15.7517 5.24989 15.3757L8.84521 13.3995C8.90198 13.3682 8.9509 13.3256 8.98854 13.2744C9.02618 13.2233 9.05163 13.165 9.06312 13.1035C9.0746 13.0421 9.07185 12.9789 9.05504 12.9186C9.03823 12.8583 9.00777 12.8021 8.9658 12.7542L8.49963 12.2211L8.49783 12.2194C7.59787 11.1979 6.9364 9.97414 6.84371 8.48642C6.79331 7.67487 6.9346 6.82817 7.10469 6.35255C7.32899 5.70505 7.69284 5.1093 8.17294 4.60346C8.65924 4.09813 9.2506 3.69463 9.90944 3.41859C10.5683 3.14255 11.2802 3 12 3C12.7198 3 13.4317 3.14255 14.0906 3.41859C14.7494 3.69463 15.3408 4.09813 15.8271 4.60346C16.3074 5.1098 16.6712 5.70616 16.8953 6.35427C17.0654 6.82903 17.2067 7.67572 17.1563 8.48728C17.0636 9.97499 16.4021 11.1979 15.5031 12.2194" />
  ),
  facebook: (
    <path d="M12 2.03999C6.5 2.03999 2 6.52999 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84999C10.44 7.33999 11.93 5.95999 14.22 5.95999C15.31 5.95999 16.45 6.14999 16.45 6.14999V8.61999H15.19C13.95 8.61999 13.56 9.38999 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0053 14.4456 22 12.06C22 6.52999 17.5 2.03999 12 2.03999Z" />
  ),
  instagram: (
    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" />
  ),
  twitter: (
    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19073 14.4122 4.5301 14.4362 3.89 14.31C4.16161 15.1625 4.69354 15.9084 5.41102 16.4429C6.1285 16.9775 6.99545 17.2737 7.89 17.29C6.37363 18.4904 4.494 19.1393 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
  ),
  wikipedia: (
    <path d="M14.97 18.95L12.41 12.92C11.39 14.91 10.27 17 9.31 18.95C9.3 18.96 8.84 18.95 8.84 18.95C7.37 15.5 5.85 12.1 4.37 8.68C4.03 7.84 2.83 6.5 2 6.5V6.05H7.06V6.5C6.46 6.5 5.44 6.9 5.7 7.55C6.42 9.09 8.94 15.06 9.63 16.58C10.1 15.64 11.43 13.16 12 12.11C11.55 11.23 10.13 7.93 9.71 7.11C9.39 6.57 8.58 6.5 7.96 6.5C7.96 6.35 7.97 6.25 7.96 6.06L12.42 6.07V6.47C11.81 6.5 11.24 6.71 11.5 7.29C12.1 8.53 12.45 9.42 13 10.57C13.17 10.23 14.07 8.38 14.5 7.41C14.76 6.76 14.37 6.5 13.29 6.5C13.3 6.38 13.3 6.17 13.3 6.07C14.69 6.06 16.78 6.06 17.15 6.05V6.47C16.44 6.5 15.71 6.88 15.33 7.46L13.5 11.3C13.68 11.81 15.46 15.76 15.65 16.2L19.5 7.37C19.2 6.65 18.34 6.5 18 6.5V6.05L22 6.08V6.5C21.12 6.5 20.57 7 20.25 7.75C19.45 9.54 17 15.24 15.4 18.95H14.97Z" />
  ),
};

export default icons;
