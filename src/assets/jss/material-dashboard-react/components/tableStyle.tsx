import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont
} from '../../material-dashboard-react';
import { createStyles, Theme } from '@material-ui/core';

const tableStyle = (theme: Theme) => createStyles({
  warningTableHeader: {
    color: warningColor[0]
  },
  primaryTableHeader: {
    color: primaryColor[0]
  },
  dangerTableHeader: {
    color: dangerColor[0]
  },
  successTableHeader: {
    color: successColor[0]
  },
  infoTableHeader: {
    color: infoColor[0]
  },
  roseTableHeader: {
    color: roseColor[0]
  },
  grayTableHeader: {
    color: grayColor[0]
  },
  table: {
    marginBottom: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse'
  },
  tableHeadCell: {
    color: 'inherit',
    ...defaultFont,
    fontSize: '1em'
  },
  tableCell: {
    ...defaultFont,
    lineHeight: '1.42857143',
    padding: '5px 8px',
    verticalAlign: 'middle',
  },
  CellContent: {
    whiteSpace: 'pre-line',
    textOverflow: 'ellipsis',
    display: 'block',
    overflow: 'auto',
    maxHeight: '150px'
  },
  tableResponsive: {
    width: '100%',
    marginTop: '0px',
    overflowX: 'auto'
  }
});

export default tableStyle;
