import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const LineChart = () => {
    const studentMarks = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: "Bob", math: 74, physics: 81, chemistry: 68 },
        { id: 3, name: "Charlie", math: 90, physics: 88, chemistry: 95 },
        { id: 4, name: "David", math: 67, physics: 72, chemistry: 70 },
        { id: 5, name: "Eva", math: 79, physics: 85, chemistry: 80 },
        { id: 6, name: "Frank", math: 92, physics: 89, chemistry: 94 },
        { id: 7, name: "Grace", math: 58, physics: 65, chemistry: 60 },
        { id: 8, name: "Hannah", math: 77, physics: 80, chemistry: 85 },
        { id: 9, name: "Ian", math: 84, physics: 90, chemistry: 88 },
        { id: 10, name: "Jack", math: 70, physics: 75, chemistry: 78 }
      ];
    return (
        <div>
            <LChart width = {700} height = {500} data = {studentMarks}>
                <XAxis dataKey={'name'}/>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'/>
                <Line dataKey='physics' stroke='purple'/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip/>
            </LChart>
        </div>
    );
};

export default LineChart;