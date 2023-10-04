import prisma from '../../services/db'
import { useState } from 'react'

import ManageTaskViews from 'src/views/task-views/TaskManageViews'

const TaskManage = ({ data }) => {
  const [project, setProject] = useState(JSON.parse(data))
  return (
    <>
      <ManageTaskViews data={project}></ManageTaskViews>
    </>
  )
}

export async function getServerSideProps(context) {
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(context.params.id)
    },
    include: {
      Task: {
        include: {
          user: true
        }
      },
      projectLeader: true,
      UserProject: {
        include: {
          user: true
        }
      }
    }
  })

  return {
    props: {
      data: JSON.stringify(project)
    }
  }
}

export default TaskManage