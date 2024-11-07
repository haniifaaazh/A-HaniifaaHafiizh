try{
  let num = 5
  num.toUpperCase( )
} catch (error) {
  console.log('An error occurred: ' + error.message)
  throw new Error('There was an error processing your request.')
}