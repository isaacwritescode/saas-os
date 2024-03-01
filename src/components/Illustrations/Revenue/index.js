import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const Revenue = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "white" : "black";
  const bgColor = theme.palette.mode === "dark" ? "#333541" : "white";

  return (
    <Box sx={{ filter: "drop-shadow(0px 40px 20px rgba(0, 0, 0, 0.1))" }}>
      <svg
        width="100%"
        viewBox="0 0 219 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="219" height="142" rx="20.5931" fill={bgColor} />
        <rect
          x="0.5"
          y="0.5"
          width="218"
          height="141"
          rx="20.0931"
          stroke={textColor}
          stroke-opacity="0.1"
        />
        <path
          d="M28.3155 39.4354C30.8741 39.4354 33.4637 38.5511 33.4637 36.8612V34.2871V31.713V29.1388C33.4637 27.4489 30.8741 26.5647 28.3155 26.5647C25.7568 26.5647 23.1672 27.4489 23.1672 29.1388V31.713V34.2871V36.8612C23.1672 38.5511 25.7568 39.4354 28.3155 39.4354ZM28.3155 38.1483C25.9202 38.1483 24.4543 37.3149 24.4543 36.8612V36.0452C25.4459 36.5845 26.8849 36.8612 28.3155 36.8612C29.746 36.8612 31.185 36.5845 32.1767 36.0452V36.8612C32.1767 37.3149 30.7107 38.1483 28.3155 38.1483ZM28.3155 27.8518C30.7107 27.8518 32.1767 28.6851 32.1767 29.1388C32.1767 29.5925 30.7107 30.4259 28.3155 30.4259C25.9202 30.4259 24.4543 29.5925 24.4543 29.1388C24.4543 28.6851 25.9202 27.8518 28.3155 27.8518ZM24.4543 30.897C25.4459 31.4362 26.8849 31.713 28.3155 31.713C29.746 31.713 31.185 31.4362 32.1767 30.897V31.713C32.1767 32.1667 30.7107 33 28.3155 33C25.9202 33 24.4543 32.1667 24.4543 31.713V30.897ZM24.4543 33.4711C25.4459 34.0104 26.8849 34.2871 28.3155 34.2871C29.746 34.2871 31.185 34.0104 32.1767 33.4711V34.2871C32.1767 34.7408 30.7107 35.5742 28.3155 35.5742C25.9202 35.5742 24.4543 34.7408 24.4543 34.2871V33.4711Z"
          fill={textColor}
        />
        <path
          d="M26.8931 51.3224V52.6424H24.5291V59.7224H23.1491V52.6424H20.7731V51.3224H26.8931ZM29.5834 59.8784C28.7034 59.8784 27.9554 59.5744 27.3394 58.9664C26.7234 58.3584 26.4154 57.6104 26.4154 56.7224C26.4154 55.8344 26.7234 55.0864 27.3394 54.4784C27.9554 53.8704 28.7034 53.5664 29.5834 53.5664C30.4714 53.5664 31.2194 53.8704 31.8274 54.4784C32.4434 55.0864 32.7514 55.8344 32.7514 56.7224C32.7514 57.6104 32.4434 58.3584 31.8274 58.9664C31.2194 59.5744 30.4714 59.8784 29.5834 59.8784ZM28.2514 58.0784C28.6114 58.4384 29.0554 58.6184 29.5834 58.6184C30.1114 58.6184 30.5554 58.4384 30.9154 58.0784C31.2754 57.7184 31.4554 57.2664 31.4554 56.7224C31.4554 56.1784 31.2754 55.7264 30.9154 55.3664C30.5554 55.0064 30.1114 54.8264 29.5834 54.8264C29.0554 54.8264 28.6114 55.0064 28.2514 55.3664C27.8914 55.7264 27.7114 56.1784 27.7114 56.7224C27.7114 57.2664 27.8914 57.7184 28.2514 58.0784ZM37.1541 54.9704H35.6661V57.8504C35.6661 58.0984 35.7221 58.2784 35.8341 58.3904C35.9461 58.4944 36.1101 58.5544 36.3261 58.5704C36.5501 58.5784 36.8261 58.5744 37.1541 58.5584V59.7224C36.1621 59.8424 35.4501 59.7584 35.0181 59.4704C34.5861 59.1744 34.3701 58.6344 34.3701 57.8504V54.9704H33.2661V53.7224H34.3701V52.4264L35.6661 52.0424V53.7224H37.1541V54.9704ZM42.8354 53.7224H44.1314V59.7224H42.8354V58.8584C42.3474 59.5384 41.6474 59.8784 40.7354 59.8784C39.9114 59.8784 39.2074 59.5744 38.6234 58.9664C38.0394 58.3504 37.7474 57.6024 37.7474 56.7224C37.7474 55.8344 38.0394 55.0864 38.6234 54.4784C39.2074 53.8704 39.9114 53.5664 40.7354 53.5664C41.6474 53.5664 42.3474 53.9024 42.8354 54.5744V53.7224ZM39.5834 58.1024C39.9434 58.4624 40.3954 58.6424 40.9394 58.6424C41.4834 58.6424 41.9354 58.4624 42.2954 58.1024C42.6554 57.7344 42.8354 57.2744 42.8354 56.7224C42.8354 56.1704 42.6554 55.7144 42.2954 55.3544C41.9354 54.9864 41.4834 54.8024 40.9394 54.8024C40.3954 54.8024 39.9434 54.9864 39.5834 55.3544C39.2234 55.7144 39.0434 56.1704 39.0434 56.7224C39.0434 57.2744 39.2234 57.7344 39.5834 58.1024ZM45.642 59.7224V50.9624H46.938V59.7224H45.642ZM56.3148 59.7224L54.5388 56.6624H52.9068V59.7224H51.5268V51.3224H54.8868C55.6388 51.3224 56.2748 51.5864 56.7948 52.1144C57.3228 52.6344 57.5868 53.2704 57.5868 54.0224C57.5868 54.5584 57.4308 55.0504 57.1188 55.4984C56.8148 55.9384 56.4148 56.2584 55.9188 56.4584L57.8268 59.7224H56.3148ZM52.9068 52.6184V55.4264H54.8868C55.2548 55.4264 55.5668 55.2904 55.8228 55.0184C56.0788 54.7464 56.2068 54.4144 56.2068 54.0224C56.2068 53.6304 56.0788 53.2984 55.8228 53.0264C55.5668 52.7544 55.2548 52.6184 54.8868 52.6184H52.9068ZM59.5058 57.2744C59.6018 57.7304 59.8218 58.0824 60.1658 58.3304C60.5098 58.5704 60.9298 58.6904 61.4258 58.6904C62.1138 58.6904 62.6298 58.4424 62.9738 57.9464L64.0418 58.5704C63.4498 59.4424 62.5738 59.8784 61.4138 59.8784C60.4378 59.8784 59.6498 59.5824 59.0498 58.9904C58.4498 58.3904 58.1498 57.6344 58.1498 56.7224C58.1498 55.8264 58.4458 55.0784 59.0378 54.4784C59.6298 53.8704 60.3898 53.5664 61.3178 53.5664C62.1978 53.5664 62.9178 53.8744 63.4778 54.4904C64.0458 55.1064 64.3298 55.8544 64.3298 56.7344C64.3298 56.8704 64.3138 57.0504 64.2818 57.2744H59.5058ZM59.4938 56.2184H63.0218C62.9338 55.7304 62.7298 55.3624 62.4098 55.1144C62.0978 54.8664 61.7298 54.7424 61.3058 54.7424C60.8258 54.7424 60.4258 54.8744 60.1058 55.1384C59.7858 55.4024 59.5818 55.7624 59.4938 56.2184ZM69.3038 53.7224H70.7198L68.3798 59.7224H66.8798L64.5398 53.7224H65.9558L67.6358 58.2824L69.3038 53.7224ZM72.3261 57.2744C72.4221 57.7304 72.6421 58.0824 72.9861 58.3304C73.3301 58.5704 73.7501 58.6904 74.2461 58.6904C74.9341 58.6904 75.4501 58.4424 75.7941 57.9464L76.8621 58.5704C76.2701 59.4424 75.3941 59.8784 74.2341 59.8784C73.2581 59.8784 72.4701 59.5824 71.8701 58.9904C71.2701 58.3904 70.9701 57.6344 70.9701 56.7224C70.9701 55.8264 71.2661 55.0784 71.8581 54.4784C72.4501 53.8704 73.2101 53.5664 74.1381 53.5664C75.0181 53.5664 75.7381 53.8744 76.2981 54.4904C76.8661 55.1064 77.1501 55.8544 77.1501 56.7344C77.1501 56.8704 77.1341 57.0504 77.1021 57.2744H72.3261ZM72.3141 56.2184H75.8421C75.7541 55.7304 75.5501 55.3624 75.2301 55.1144C74.9181 54.8664 74.5501 54.7424 74.1261 54.7424C73.6461 54.7424 73.2461 54.8744 72.9261 55.1384C72.6061 55.4024 72.4021 55.7624 72.3141 56.2184ZM81.4465 53.5664C82.1345 53.5664 82.6905 53.7864 83.1145 54.2264C83.5385 54.6664 83.7505 55.2704 83.7505 56.0384V59.7224H82.4545V56.1704C82.4545 55.7224 82.3345 55.3784 82.0945 55.1384C81.8545 54.8984 81.5265 54.7784 81.1105 54.7784C80.6545 54.7784 80.2865 54.9224 80.0065 55.2104C79.7265 55.4904 79.5865 55.9224 79.5865 56.5064V59.7224H78.2905V53.7224H79.5865V54.4904C79.9785 53.8744 80.5985 53.5664 81.4465 53.5664ZM89.1899 53.7224H90.4859V59.7224H89.1899V58.9544C88.7979 59.5704 88.1779 59.8784 87.3299 59.8784C86.6419 59.8784 86.0859 59.6584 85.6619 59.2184C85.2379 58.7784 85.0259 58.1744 85.0259 57.4064V53.7224H86.3219V57.2744C86.3219 57.7224 86.4419 58.0664 86.6819 58.3064C86.9219 58.5464 87.2499 58.6664 87.6659 58.6664C88.1219 58.6664 88.4899 58.5264 88.7699 58.2464C89.0499 57.9584 89.1899 57.5224 89.1899 56.9384V53.7224ZM93.0214 57.2744C93.1174 57.7304 93.3374 58.0824 93.6814 58.3304C94.0254 58.5704 94.4454 58.6904 94.9414 58.6904C95.6294 58.6904 96.1454 58.4424 96.4894 57.9464L97.5574 58.5704C96.9654 59.4424 96.0894 59.8784 94.9294 59.8784C93.9534 59.8784 93.1654 59.5824 92.5654 58.9904C91.9654 58.3904 91.6654 57.6344 91.6654 56.7224C91.6654 55.8264 91.9614 55.0784 92.5534 54.4784C93.1454 53.8704 93.9054 53.5664 94.8334 53.5664C95.7134 53.5664 96.4334 53.8744 96.9934 54.4904C97.5614 55.1064 97.8454 55.8544 97.8454 56.7344C97.8454 56.8704 97.8294 57.0504 97.7974 57.2744H93.0214ZM93.0094 56.2184H96.5374C96.4494 55.7304 96.2454 55.3624 95.9254 55.1144C95.6134 54.8664 95.2454 54.7424 94.8214 54.7424C94.3414 54.7424 93.9414 54.8744 93.6214 55.1384C93.3014 55.4024 93.0974 55.7624 93.0094 56.2184Z"
          fill={textColor}
        />
        <path
          d="M37.2011 102.578C37.2011 104.392 36.6144 105.874 35.4411 107.026C34.2891 108.157 32.7744 108.84 30.8971 109.074V111.922H28.8171V109.106C27.0464 109 25.5317 108.52 24.2731 107.666C23.0144 106.813 22.1077 105.65 21.5531 104.178L24.7211 102.354C25.4677 104.232 26.8331 105.277 28.8171 105.49V98.8344C27.8571 98.4717 27.0784 98.1517 26.4811 97.8744C25.8837 97.5757 25.2437 97.1704 24.5611 96.6584C23.8997 96.1464 23.3984 95.5277 23.0571 94.8024C22.7371 94.0557 22.5771 93.1917 22.5771 92.2104C22.5771 90.4184 23.1744 88.9677 24.3691 87.8584C25.5637 86.7491 27.0464 86.1091 28.8171 85.9384V83.1224H30.8971V85.9704C33.7557 86.3544 35.7397 87.8157 36.8491 90.3544L33.7451 92.1464C33.1904 90.7597 32.2411 89.9171 30.8971 89.6184V95.9544C31.5797 96.2104 32.0917 96.4131 32.4331 96.5624C32.7957 96.7117 33.2651 96.9357 33.8411 97.2344C34.4384 97.5331 34.8971 97.8317 35.2171 98.1304C35.5371 98.4291 35.8677 98.7917 36.2091 99.2184C36.5717 99.6451 36.8277 100.146 36.9771 100.722C37.1264 101.277 37.2011 101.896 37.2011 102.578ZM26.2571 92.2104C26.2571 92.8717 26.4491 93.4157 26.8331 93.8424C27.2384 94.2691 27.8997 94.6957 28.8171 95.1224V89.5544C28.0277 89.6824 27.3984 89.9811 26.9291 90.4504C26.4811 90.9197 26.2571 91.5064 26.2571 92.2104ZM30.8971 105.458C31.7504 105.288 32.4011 104.946 32.8491 104.434C33.2971 103.922 33.5211 103.314 33.5211 102.61C33.5211 101.906 33.3077 101.341 32.8811 100.914C32.4544 100.466 31.7931 100.04 30.8971 99.6344V105.458ZM44.4596 86.3224H47.6596V108.722H43.9796V90.2584L39.4676 91.5384L38.5716 88.4024L44.4596 86.3224ZM56.8778 104.882L54.6378 113.202H51.7578L53.0378 104.882H56.8778ZM59.5226 108.722V105.842L67.3306 97.8744C69.2292 95.9757 70.1786 94.3331 70.1786 92.9464C70.1786 91.8584 69.8479 91.0157 69.1866 90.4184C68.5466 89.7997 67.7252 89.4904 66.7226 89.4904C64.8452 89.4904 63.4586 90.4184 62.5626 92.2744L59.4586 90.4504C60.1626 88.9571 61.1546 87.8264 62.4346 87.0584C63.7146 86.2904 65.1332 85.9064 66.6906 85.9064C68.6532 85.9064 70.3386 86.5251 71.7466 87.7624C73.1546 88.9997 73.8586 90.6851 73.8586 92.8184C73.8586 95.1011 72.5892 97.5331 70.0506 100.114L64.9946 105.17H74.2746V108.722H59.5226ZM91.6996 105.97C90.1636 108.082 88.0089 109.138 85.2356 109.138C82.4622 109.138 80.2969 108.082 78.7396 105.97C77.2036 103.858 76.4356 101.042 76.4356 97.5224C76.4356 94.0024 77.2036 91.1864 78.7396 89.0744C80.2969 86.9624 82.4622 85.9064 85.2356 85.9064C88.0089 85.9064 90.1636 86.9624 91.6996 89.0744C93.2569 91.1864 94.0356 94.0024 94.0356 97.5224C94.0356 101.042 93.2569 103.858 91.6996 105.97ZM85.2356 105.554C86.8996 105.554 88.1689 104.861 89.0436 103.474C89.9182 102.088 90.3556 100.104 90.3556 97.5224C90.3556 94.9411 89.9182 92.9571 89.0436 91.5704C88.1689 90.1837 86.8996 89.4904 85.2356 89.4904C83.5929 89.4904 82.3236 90.1837 81.4276 91.5704C80.5529 92.9571 80.1156 94.9411 80.1156 97.5224C80.1156 100.104 80.5529 102.088 81.4276 103.474C82.3236 104.861 83.5929 105.554 85.2356 105.554ZM111.856 105.97C110.32 108.082 108.165 109.138 105.392 109.138C102.618 109.138 100.453 108.082 98.8958 105.97C97.3598 103.858 96.5918 101.042 96.5918 97.5224C96.5918 94.0024 97.3598 91.1864 98.8958 89.0744C100.453 86.9624 102.618 85.9064 105.392 85.9064C108.165 85.9064 110.32 86.9624 111.856 89.0744C113.413 91.1864 114.192 94.0024 114.192 97.5224C114.192 101.042 113.413 103.858 111.856 105.97ZM105.392 105.554C107.056 105.554 108.325 104.861 109.2 103.474C110.074 102.088 110.512 100.104 110.512 97.5224C110.512 94.9411 110.074 92.9571 109.2 91.5704C108.325 90.1837 107.056 89.4904 105.392 89.4904C103.749 89.4904 102.48 90.1837 101.584 91.5704C100.709 92.9571 100.272 94.9411 100.272 97.5224C100.272 100.104 100.709 102.088 101.584 103.474C102.48 104.861 103.749 105.554 105.392 105.554ZM121.315 104.882L119.075 113.202H116.195L117.475 104.882H121.315ZM138.543 105.97C137.007 108.082 134.853 109.138 132.079 109.138C129.306 109.138 127.141 108.082 125.583 105.97C124.047 103.858 123.279 101.042 123.279 97.5224C123.279 94.0024 124.047 91.1864 125.583 89.0744C127.141 86.9624 129.306 85.9064 132.079 85.9064C134.853 85.9064 137.007 86.9624 138.543 89.0744C140.101 91.1864 140.879 94.0024 140.879 97.5224C140.879 101.042 140.101 103.858 138.543 105.97ZM132.079 105.554C133.743 105.554 135.013 104.861 135.887 103.474C136.762 102.088 137.199 100.104 137.199 97.5224C137.199 94.9411 136.762 92.9571 135.887 91.5704C135.013 90.1837 133.743 89.4904 132.079 89.4904C130.437 89.4904 129.167 90.1837 128.271 91.5704C127.397 92.9571 126.959 94.9411 126.959 97.5224C126.959 100.104 127.397 102.088 128.271 103.474C129.167 104.861 130.437 105.554 132.079 105.554ZM158.7 105.97C157.164 108.082 155.009 109.138 152.236 109.138C149.462 109.138 147.297 108.082 145.74 105.97C144.204 103.858 143.436 101.042 143.436 97.5224C143.436 94.0024 144.204 91.1864 145.74 89.0744C147.297 86.9624 149.462 85.9064 152.236 85.9064C155.009 85.9064 157.164 86.9624 158.7 89.0744C160.257 91.1864 161.036 94.0024 161.036 97.5224C161.036 101.042 160.257 103.858 158.7 105.97ZM152.236 105.554C153.9 105.554 155.169 104.861 156.044 103.474C156.918 102.088 157.356 100.104 157.356 97.5224C157.356 94.9411 156.918 92.9571 156.044 91.5704C155.169 90.1837 153.9 89.4904 152.236 89.4904C150.593 89.4904 149.324 90.1837 148.428 91.5704C147.553 92.9571 147.116 94.9411 147.116 97.5224C147.116 100.104 147.553 102.088 148.428 103.474C149.324 104.861 150.593 105.554 152.236 105.554ZM178.856 105.97C177.32 108.082 175.165 109.138 172.392 109.138C169.618 109.138 167.453 108.082 165.896 105.97C164.36 103.858 163.592 101.042 163.592 97.5224C163.592 94.0024 164.36 91.1864 165.896 89.0744C167.453 86.9624 169.618 85.9064 172.392 85.9064C175.165 85.9064 177.32 86.9624 178.856 89.0744C180.413 91.1864 181.192 94.0024 181.192 97.5224C181.192 101.042 180.413 103.858 178.856 105.97ZM172.392 105.554C174.056 105.554 175.325 104.861 176.2 103.474C177.074 102.088 177.512 100.104 177.512 97.5224C177.512 94.9411 177.074 92.9571 176.2 91.5704C175.325 90.1837 174.056 89.4904 172.392 89.4904C170.749 89.4904 169.48 90.1837 168.584 91.5704C167.709 92.9571 167.272 94.9411 167.272 97.5224C167.272 100.104 167.709 102.088 168.584 103.474C169.48 104.861 170.749 105.554 172.392 105.554Z"
          fill={textColor}
        />
      </svg>
    </Box>
  );
};

export default Revenue;
