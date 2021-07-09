import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import '../Grid/Grid.css'

export default function Grid() {
    const [dataSer, setDataSer] = useState([]);

    async function Info(){
        const info = await axios.get('http://localhost:3001/');
        setDataSer(info.data);
    }

    useEffect(() => {
        Info();
    },[])

    return !dataSer ? null:(
        <div className="container">
            <div className="grid-container">
                {dataSer.length !== 0?dataSer.map(x => <Card key={x.id} url={x.url} />):null}
            </div>
        </div>
    )
}