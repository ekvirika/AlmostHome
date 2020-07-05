using Microsoft.EntityFrameworkCore.Migrations;

namespace AlmostHome.Database.Migrations.AnimalsDb
{
    public partial class Animals : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Animals",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: false),
                    LocationCity = table.Column<string>(nullable: false),
                    AnimalCategory = table.Column<int>(nullable: false),
                    AnimalBreed = table.Column<string>(nullable: true),
                    Color = table.Column<string>(nullable: false),
                    Sex = table.Column<int>(nullable: false),
                    Condition = table.Column<string>(nullable: false),
                    ReasonToAdopt = table.Column<string>(nullable: false),
                    FoundDate = table.Column<string>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: false),
                    Age = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Animals", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Animals");
        }
    }
}
