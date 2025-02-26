<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller {
    public function index() {
        $projects = Project::paginate(10); // Paginate with 10 items per page

        return Inertia::render('projects/index', [
            'projects' => $projects,
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        Project::create($request->all());

        return redirect()->route('projects.index')->with('success', 'Project created.');
    }

    public function update(Request $request, Project $project) {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $project->update($request->all());

        return redirect()->route('projects.index')->with('success', 'Project updated.');
    }

    public function destroy(Project $project) {
        $project->delete();
        return redirect()->route('projects.index')->with('success', 'Project deleted.');
    }
}
