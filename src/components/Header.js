import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export default function Header() {
  return (
    <div className='Header' style={{ marginTop: '1em', marginBottom: '1em' }}>
      <Paper elevation={2}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Summary" />
          <Tab label="Jobs" />
          <Tab label="Nodes" />
        </Tabs>
      </Paper>
    </div>
  );
};
