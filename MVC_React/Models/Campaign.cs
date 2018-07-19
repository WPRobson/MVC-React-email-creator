using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVC_React.Models
{
    public class Campaign
    {
        Guid EmailId { get; set; }

        string CampaignName { get; set; }

        List<string> Addresses { get; set; } 

    }
}
