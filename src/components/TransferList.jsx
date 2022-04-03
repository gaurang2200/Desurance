import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


function not(a, b) {
  return a.filter((item) => b.indexOf(item) === -1);
}

function intersection(a, b) {
  return a.filter((item) => b.indexOf(item) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

function TransferList({ left, setLeft, right, setRight }) {
  const [checked, setChecked] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (item) => () => {
    const currentIndex = checked.indexOf(item);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card sx={{backgroundColor:'#555A', overflow:'hidden', minHeight:200, height:'30vh', position:'relative'}}>
      <CardHeader
        sx={{ py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
      />
      <Divider />
      <List
        sx={{
            position:'absolute',
            height: 230,
            overflowY: 'scroll',
            left: 0,
            right: '-10em'
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((item) => {
          const labelId = `transfer-list-all-item-${item.id}-label`;

          return (
            <ListItem
              key={item.id}
              role="listitem"
              button
              onClick={handleToggle(item)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(item) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText sx={{ color:'black' }} id={labelId} primary={item.name} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item sm={5}>{customList('Choices', left)}</Grid>
      <Grid item sm>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5, background:'linear-gradient(135deg, #FA00FF, #896FBA, #ff00dc7d, #0EC9FF)', p: '2px', borderRadius:'2em' }}
            variant="contained"
            size="small"
            onClick={handleCheckedRight}
            // disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            <Box sx={{ bgcolor:'#040011', width:'100%', borderRadius:'2em', display:'flex', justifyContent:'center' }}>
                <ArrowRightIcon />
            </Box>
          </Button>
          <Button
            sx={{ my: 0.5, background:'linear-gradient(135deg, #FA00FF, #896FBA, #ff00dc7d, #0EC9FF)', p: '2px', borderRadius:'2em' }}
            variant="contained"
            size="small"
            onClick={handleCheckedLeft}
            // disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            <Box sx={{ bgcolor:'#040011', width:'100%', borderRadius:'2em', display:'flex', justifyContent:'center' }}>
                <ArrowLeftIcon />
            </Box>
          </Button>
        </Grid>
      </Grid>
      <Grid item sm={5}>{customList('Chosen', right)}</Grid>
    </Grid>
  );
}

export default TransferList;