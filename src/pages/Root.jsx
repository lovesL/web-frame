import React, { useEffect, useState } from 'react';
import { Avatar, Typography, Space } from 'antd';
import { useRequest } from 'ahooks';
import { history } from 'umi';
import { getClient, getMenus } from '@/services/client';
import './index.less'

const { Text } = Typography;
const Root = () => {
  const first = useRequest(getClient,{ manual:true });
  const secon = useRequest(getMenus,{ manual:true });

  const [client,setClient] = useState([]);

  useEffect( async ()=>{
    const data = await first.run();
    setClient(data)
  },[])

  const handleClick = async (key) => {
    const data=  await secon.run(key);
    history.push(`${ data.data.shift().path }?sys=${ key }`);
  }
  return (
    <div className="clientWrapper">
      <div className="client">
        {
          client.map((res,i)=>{
            return (
              <li onClick={ ()=> handleClick(res.projectKey) } key={ res.projectKey }>
                <Avatar size={100} src={ res.src } />
                <Text strong ellipsis style={{ width: 100,marginTop:10 }}>
                  { res.projectName } a design language for background applications, is refined by Ant UED Team.
                </Text>
              </li>
            )
          })
        }
        <li>
          <Avatar size={100} />
          <Text strong ellipsis style={{ width: 100,marginTop:10 }}>
            pro3, a design language for background applications, is refined by Ant UED Team.
          </Text>
        </li>
        <li>
          <Avatar size={100} />
          <Text strong ellipsis style={{ width: 100,marginTop:10 }}>
            pro4, a design language for background applications, is refined by Ant UED Team.
          </Text>
        </li>
        <li>
          <Avatar size={100} />
          <Text strong ellipsis style={{ width: 100,marginTop:10 }}>
            pro5, a design language for background applications, is refined by Ant UED Team.
          </Text>
        </li>
        <li>
          <Avatar size={100} />
          <Text strong ellipsis style={{ width: 100,marginTop:10 }}>
            pro6, a design language for background applications, is refined by Ant UED Team.
          </Text>
        </li>
      </div>
    </div>
  )
}
export  default Root
