ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
     <IndexRoute component={Home}/>
      <Route path="Step_1" component={Step_1}/>
      <Route path="Step_2" component={Step_2}/>
      <Route path="Step_3" component={Step_3}/>
      <Route path="Step_4" component={Step_4}/>
      <Route path="Step_5" component={Step_5}/>
      <Route path="Step_6" component={Step_6}/>
      <Route path="Step_7" component={Step_7}/>
      <Route path="Step_8" component={Step_8}/>
      <Route path="Step_9" component={Step_9}/>
      <Route path="Step_10" component={Step_10}/>
    </Route>
  </Router>,
  document.getElementById('content')
);
