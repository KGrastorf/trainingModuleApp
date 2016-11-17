Main = React.createClass({
  render: function(){
    return (
      <div>
        <div>
            <Link to='/'>
            <button className="buttonH">Home</button>
            </Link>
            <Link to='Step_1'>
            <button className="button1">Step 1</button>
            </Link>
            <Link to='Step_2'>
            <button className="button2">Step 2</button>
            </Link>
            <Link to='Step_3'>
            <button className="button3">Step 3</button>
            </Link>
            <Link to='Step_4'>
            <button className="button4">Step 4</button>
            </Link>
            <Link to='Step_5'>
            <button className="button1">Step 5</button>
            </Link>
            <Link to='Step_6'>
            <button className="button2">Step 6</button>
            </Link>
            <Link to='Step_7'>
            <button className="button3">Step 7</button>
            </Link>
            <Link to='Step_8'>
            <button className="button4">Step 8</button>
            </Link>
            <Link to='Step_9'>
            <button className="button1">Step 9</button>
            </Link>
            <Link to='Step_10'>
            <button className="button2">Step 10</button>
            </Link>
        </div>
        {this.props.children}
    </div>

    )
  }
})
