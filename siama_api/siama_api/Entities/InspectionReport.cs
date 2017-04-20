namespace siama_api.Entities
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("InspectionReport")]
    public class InspectionReport
    {
        [Required]
        [Key]
        [MaxLength(6)]
        public string InspectionNo { get; set; }

        [Required]
        public DateTime InspectionDate { get; set; }

        [Required]
        [MaxLength(6)]
        public string StructureNo { get; set; }

        [Required]
        [MaxLength(10)]
        public string DeckType { get; set; }

        [Required]
        public bool IsMaintenanceRequired { get; set; }

        [Required]
        public bool IsHighwayBridge { get; set; }
    }
}
