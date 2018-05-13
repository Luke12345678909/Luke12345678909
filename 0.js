importPackage( java.sql );

// load the mySQL driver
java.lang.Class.forName( "com.mysql.jdbc.Driver" );

// create connection to the database
var conn = DriverManager.getConnection( "jdbc:mysql://localhost/rhino", "uRhino", "pRhino" );

// create a statement handle
var stmt = conn.createStatement();

// get a resultset 
var rs = stmt.executeQuery( "select * from employee" );

// get the metadata from the resultset
var meta = rs.getMetaData();

// loop over the records, dump out column names and values
while( rs.next() ) {
	for( var i = 1; i <= meta.getColumnCount(); i++ ) {
		print( meta.getColumnName( i ) + ": " + rs.getObject( i ) + "\n" );	
	}
	print( "----------\n" );
}

// cleanup
rs.close();
stmt.close();
conn.close();
