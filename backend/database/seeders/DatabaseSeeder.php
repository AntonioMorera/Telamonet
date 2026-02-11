<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Usuario de prueba - teacher
        User::factory()->create([
            'name' => 'ProfesorPrueba',
            'email' => 'profesor@prueba.com',
            'password' => Hash::make('csas1234'),
        ]);
        
        // Usuario de prueba - student
        User::factory()->create([
            'name' => 'estudiantePrueba',
            'email' => 'estudiante@prueba.com',
            'password' => Hash::make('csas1234'),
        ]);

        // Usuario de prueba - externalUser
        User::factory()->create([
            'name' => 'UsuarioPrueba',
            'email' => 'usuario@prueba.com',
            'password' => Hash::make('csas1234'),
        ]);


        // Roles de usuarios
        $admin        = Role::create(['name' => 'admin']);
        $teacher      = Role::create(['name' => 'teacher']);
        $student      = Role::create(['name' => 'student']);
        $externalUser = Role::create(['name' => 'externalUser']);

        // Permisos de usuarios
        $createMeeting = Permission::create(['name' => 'create meeting']);
        $accessMeeting = Permission::create(['name' => 'access meeting']);
        $modifyMeeting = Permission::create(['name' => 'modify meeting']);
        $deleteMeeting = Permission::create(['name' => 'delete meeting']);

        // Asignar roles a cada usuario
        $admin->givePermissionTo($createMeeting, $accessMeeting, $modifyMeeting, $deleteMeeting);
        $teacher->givePermissionTo($createMeeting, $accessMeeting, $modifyMeeting);
        $student->givePermissionTo($accessMeeting);
        $externalUser->givePermissionTo($accessMeeting);

        $teacherTest = User::find(2); // Apunta al usuario de prueba - teacher
        $teacherTest->assignrole('teacher');

        
        $studentTest = User::find(3); // Apunta al usuario de prueba - student
        $studentTest->assignrole('student');

        $externalUserTest = User::find(4); // Apunta al usuario de prueba - externalUser
        $externalUserTest->assignrole('externalUser');

    }
}
