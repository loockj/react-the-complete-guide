import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
    const [projectsState, setProjectsState] = useState({
        // id for a project, undefined for no project, null for a new project
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    const handleAddTask = task => {
        setProjectsState(prevState => {
            const taskId = Math.random();
            const newTask = {
                text: task,
                projectId: prevState.selectedProjectId,
                id: taskId,
            };
            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks],
            };
        });
    };

    const handleDeleteTask = id => {
        setProjectsState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(task => task.id !== id),
            };
        });
    };

    const handleAddProject = () => {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    };

    const handleSaveProject = project => {
        setProjectsState(prevState => {
            const projectId = Math.random();
            const newProject = {
                ...project,
                id: projectId,
            };
            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
                selectedProjectId: undefined,
            };
        });
    };

    const handleCancelProject = () => {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    };

    const handleSelectProject = id => {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    };

    const handleDeleteProject = () => {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    project => project.id !== prevState.selectedProjectId
                ),
            };
        });
    };

    const selectedProject = projectsState.projects.find(
        project => project.id === projectsState.selectedProjectId
    );
    let content = (
        <SelectedProject
            project={selectedProject}
            tasks={projectsState.tasks}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
        />
    );
    if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onAddProject={handleAddProject} />;
    } else if (projectsState.selectedProjectId === null) {
        content = <NewProject onSave={handleSaveProject} onCancel={handleCancelProject} />;
    }

    console.log(projectsState);
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar
                onAddProject={handleAddProject}
                projects={projectsState.projects}
                onSelect={handleSelectProject}
                selectedProjectId={projectsState.selectedProjectId}
            />
            {content}
        </main>
    );
}

export default App;
