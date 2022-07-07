using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dashy.Components.Models
{
    public class MenuGroup
    {
        public string Title { get; set; }
        public List<Menu> Menus { get; set; }
    }
    public class Menu
    {
        public string Title { get; set; }
        public string Link { get; set; }
    }
}
