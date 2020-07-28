import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {submit} from '../../redux/index';
import {PieChart, Pie ,Cell,Tooltip,Legend} from 'recharts';
import './Chart.css';


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 }
  ];

const COLORS = ['#03A9F4', '#AE9C46'];

function Chart (props){


    return  <div className="chart-container">
        <div className="chart-head">
            <span className="chart-text-1">Portfolio</span>
            <span className="chart-text-2">Assert Wise</span>
        </div>
        <div className="pie-container">
            <PieChart width={800} height={400} >
                <Pie
                data={props.chartValue}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }  
                </Pie>
                <Tooltip />
                <Legend
                  layout="vertical"
                  height={24}
                  align = "center"
                  verticalAlign="middle"
                  wrapperStyle = {{marginLeft : -100}}
                />
            </PieChart>
        </div>
    </div>
  
}


const mapStateToProps = state => {
    return {
    chartValue : state.chartValue
    }
  }
  
  const mapDispatchToProps = dispatch => {
  
    return {
      submit : () => dispatch(submit()),
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Chart);



