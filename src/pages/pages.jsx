import Homepage_init from './homepage/init.jsx'
import Import_init from './services/import/init.jsx'
import Database_init from './services/database/init.jsx'
import Email_init from './services/email/init.jsx'

function Homepage(){return <Homepage_init />}
function Import(){return <Import_init />}
function Database(){return <Database_init />}
function Email(){return <Email_init />}

export {Homepage, Import, Database, Email}
