import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`

    font-size: 16px;
    width: 50%;
    margin-top: 16px;

`;
WrapperTabs.tabsRole = 'TabList';

export const WrapperTabList = styled(TabList)`

    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;

`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`

    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    margin: 4px;

    &:focus{
        outline: none;
    }

    &.is-selected {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid transparent;
    }

`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`

    paddding: 8px;
    border: 1px solid '#ccc';
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);

`;
WrapperTabPanel.tabsRole = 'TabPanel';