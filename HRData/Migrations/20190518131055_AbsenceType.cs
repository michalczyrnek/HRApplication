using Microsoft.EntityFrameworkCore.Migrations;

namespace HRData.Migrations
{
    public partial class AbsenceType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "L4",
                table: "Absences",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "L4",
                table: "Absences");
        }
    }
}
