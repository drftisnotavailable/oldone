import prisma from '../../services/db'
import { useState, useEffect, useRef } from 'react'

import TaskManageEditViews from 'src/views/task-views/TaskManageEditViews'

const TaskManageEdit = ({ data }) => {
  const [task, setTask] = useState(JSON.parse(data))
  return (
    <>
      <TaskManageEditViews data={task}></TaskManageEditViews>
    </>
  )
}

export async function getServerSideProps(context) {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(context.params.id)
    },
    include: {
      project: {
        include: {
          UserProject: {
            include: {
              user: true
            }
          }
        }
      },
      user: true
    }
  })

  return {
    props: {
      data: JSON.stringify(task)
    }
  }
}

export default TaskManageEdit