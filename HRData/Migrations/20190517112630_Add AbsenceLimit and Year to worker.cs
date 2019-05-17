using Microsoft.EntityFrameworkCore.Migrations;

namespace HRData.Migrations
{
    public partial class AddAbsenceLimitandYeartoworker : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AbsenceLimit",
                table: "Workers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Workers",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AbsenceLimit",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "Workers");
        }
    }
}
