import { FC, useState } from 'react';
import { type SyntheticEvent } from 'react';
import style from './styles.module.scss';
import { Box } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import product_table from '@assets/product_table.png';
import { CustomTab } from './components/CustomTab/CustomTab';
import { CustomTabPanel } from './components/CustomTabPanel/CustomTabPanel';

export const ProductTabs: FC = () => {
  const [value, setValue] = useState('1');
  const handleTabChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={style.wrapper}></div>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,

            fontSize: {
              xs: '10px',
              sm: '16px',
            },
          }}
        >
          <TabList
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <CustomTab label="Description" value="1" />
            <CustomTab label="User comments" value="2" />
            <CustomTab label="Question & Answer" value="3" />
          </TabList>
        </Box>
        <CustomTabPanel
          value="1"
          content={
            <>
              <p>
                100% Bio-washed Cotton - makes the fabric extra soft & silky.
                Flexible ribbed crew neck. Precisely stitched with no pilling &
                no fading. Provide all-time comfort. Anytime, anywhere. Infinite
                range of matte-finish HD prints.
              </p>
              <br />
              <img
                className={style.product_table}
                src={product_table}
                alt="product_description"
              />
            </>
          }
        />
        <CustomTabPanel value="2" content=" This is nice product" />
        <CustomTabPanel value="3" content=" You can wash it with everything" />
      </TabContext>
    </>
  );
};
